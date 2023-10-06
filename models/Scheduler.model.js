const { Schema, model } = require("mongoose");

const schedulerSchema = new Schema(
  {
    title: String,
    startDate: Date,
    endDate: Date,
    id: Number,
  },
  { timestamps: true }
);

// Export the Model
module.exports = model("Scheduler", schedulerSchema);
