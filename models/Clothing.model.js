// Data Models
// We use Mongoose to help us create MONGO DB documents
// Those will be blueprints to future documents of a future collection
// The Schema of a Mongoose model will define the skeleton of a MongoDB document

const { Schema, model } = require("mongoose");

const clothingSchema = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String },
    brand: { type: String },
    size: { type: String },
    description: { type: String },
    careInstructions: { type: String },
    season: { type: String },
    color: [{ type: String }],
    sample: { type: Boolean, default: false},
    note: [
      {
        type: Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  { timestamps: true }
);

// Export the Model
module.exports = model("Clothing", clothingSchema);
