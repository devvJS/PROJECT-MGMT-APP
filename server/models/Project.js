const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  description: {
    type: String,
    required: [true, "Please provide an email"],
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: [true, "Please provide a phone number"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: [true, "Please provide a client"],
  },
}); // Create a new schema

module.exports = mongoose.model("Project", ProjectSchema); // Create a new model with the schema
