const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

// POST /api/projects - create a new project
router.post('/projects', (req, res, next) => {
    const { title, description } = req.body;

    Project.create({ title, description, tasks: [] })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

// GET api/projects - retrieves all the projects
router.get('/projects', (req, res, next) => {
    Project.find()
        .populate('tasks')
        .then(allProjects => res.json(allProjects))
        .catch(err => res.json(err));
});

// GET api/projects/:projectId - Retrieves a specific project by id
router.get('/projects/:projectId', (req, res, next) => {
    const { projectId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    // each project document has a task array holding id of task documents
    // we use populate() method to get swap the ids for the actual task documents
    Project.findById(projectId)
        .populate('tasks')
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
});

//PUT /api/projects/:projectId - Updates a specific project by id
router.put('/projects/:projectId', (req, res, next) => {
    const { projectId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Project.findByIdAndUpdate(projectId, req.body, {new: true})
        .then((updatedProject) => res.json(updatedProject))
        .catch(error => res.json(error));
});

// DELETE - api/projects/:projectId - deletes a specific project by id
router.delete('/projects/:projectId', (req, res, next) => {
    const { projectId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Project.findByIdAndRemove(projectId)
        .then(() => res.json({ message: `Project with ${projectId} is removed successfully`}))
        .catch(error => res.json(error));

});

module.exports = router;