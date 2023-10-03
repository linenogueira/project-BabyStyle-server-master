const {Schema, model} = require("mongoose")

const noteSchema = new Schema ({
    content: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",},
},
{timestamps: true}
)

//Export the Model
module.exports = model("Note", noteSchema)