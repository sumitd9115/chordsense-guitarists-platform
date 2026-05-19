const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const DB = process.env.DATABASE;
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app.js");

// DB Connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connection Successful!!");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
