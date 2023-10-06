
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = require("./app");


// Configure CORS options (adjust as needed)
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the origin of your frontend application
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and credentials (if needed)
  optionsSuccessStatus: 204, // Set the response status code for preflight requests
};

// Apply CORS middleware with the specified options
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
