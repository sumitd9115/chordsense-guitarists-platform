const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const chordSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    inputs: {
      type: Object,
      required: true,
    },
    result: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const chordProgressions = mongoose.model("chordProgressions", chordSchema);

module.exports = chordProgressions;
