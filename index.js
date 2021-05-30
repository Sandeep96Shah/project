//adding the express library
const express = require("express");

//database
const db = require("./config/mongoose");
//port
const port = 7000;

//acquiring the functionality of express in app
const app = express();

//views
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));
app.use(express.static("assets"));

//setting up the server
app.listen(port, function (err) {
  if (err) {
    console.log(`error while running the server on port: ${port}`);
    return;
  }
  console.log(`the server is up and is running on port: ${port}`);
});
