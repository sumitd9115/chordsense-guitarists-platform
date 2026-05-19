const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter.js");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",   // your React app's URL
  credentials: true,                  // allows cookies (JWT cookie)
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

module.exports = app;
