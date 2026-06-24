const mongoose = require("mongoose");

const assistantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat_name: {
      type: String,
      required: true,
    },
    chat_history: [
      {
        prompt: {
          type: String,
          required: true,
        },
        
        response: {
          type: String,
          required: true,
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const AIAssistant = mongoose.model("AIAssistant", assistantSchema);

module.exports = AIAssistant;
