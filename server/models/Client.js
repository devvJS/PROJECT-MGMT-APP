const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
}); // Create a new schema

module.exports = mongoose.model("Client", ClientSchema); // Create a new model with the schema
