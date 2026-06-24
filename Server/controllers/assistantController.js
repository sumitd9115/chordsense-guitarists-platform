const axios = require("axios");
const catchAsync = require("../utils/catchAsync.js");
const AppError = require("../utils/appError.js");
const AIAssistant = require("../models/aiAssistantModel.js");

const AI_BACKEND = process.env.AI_BACKEND_URL || "http://localhost:8000";

exports.responseGenerator = catchAsync(async (req, res, next) => {
  const { chatId, question } = req.body;

  let chat;

  if (!chatId) {
    chat = await AIAssistant.create({
      user: req.user._id,
      chat_name: question.slice(0, 40),
      chat_history: [],
    });
  } else {
    chat = await AIAssistant.findById(chatId);

    if (!chat) {
      return next(new AppError("Chat not found.", 404));
    }
  }

  const formatted_history = [];
  chat.chat_history.forEach((entry) => {
    formatted_history.push({
      role: "user",
      content: entry.prompt,
    });
    formatted_history.push({
      role: "assistant",
      content: entry.response,
    });
  });

  const airesponse = await axios.post(`${AI_BACKEND}/api/assistant/ask`, {
    question: question,
    chat_history: formatted_history,
  });

  const answer = airesponse.data.answer;
  console.log(answer);

  chat.chat_history.push({
    prompt: question,
    response: answer,
  });
  await chat.save();
  console.log("Chat saved!");

  res.status(200).json({
    status: "success",
    data: {
      chatId: chat._id,
      response: answer,
      chat_history: chat.chat_history,
    },
  });
});

exports.getMyChats = catchAsync(async (req, res) => {
  const chats = await AIAssistant.find({
    user: req.user._id,
  }).sort("-createdAt");

  res.status(200).json({
    status: "success",
    data: chats,
  });
});

exports.getChat = catchAsync(async (req, res) => {
  const chat = await AIAssistant.findById(req.params.id);

  const messages = chat.chat_history.flatMap((item) => [
    {
      role: "user",
      content: item.prompt,
      animate: false,
    },
    {
      role: "assistant",
      content: item.response,
      animate: false,
    },
  ]);

  res.status(200).json({
    status: "success",
    messages,
  });
});
