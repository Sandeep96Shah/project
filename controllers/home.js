//acquiring the bridge to the database
const task = require("../models/home");

//action for the home page
module.exports.home = function (req, res) {
    //this is to set the background color dynamically for the selected category
  const theme = {
    home: "green",
    school: "blue",
    college: "pink",
    personal: "orange",
    other: "red",
  };
  task.find({}, function (err, items) {
    if (err) {
      console.log("error in homeController");
      return;
    }
    return res.render("home", {
      title: "home",
      todo_list: items,
      cat_theme: theme,
    });
  });
};

//action to create page
module.exports.create = function (req, res) {
  task.create(req.body, function (err, newList) {
    if (err) {
      console.log("error");
      return;
    }
    console.log("added successfully");
    return res.redirect("back");
  });
};

//action to delete page
module.exports.delete = function (req, res) {
  let deleteTask = req.body.check;
  console.log(deleteTask);
  if (typeof deleteTask === "string") {
    task.findByIdAndDelete(deleteTask, function (err) {
      if (err) {
        console.log("error");
        return;
      }
      console.log("deleted");
    });
  } else {
    for (let i = 0; i < deleteTask.length; i++) {
      task.findByIdAndDelete(deleteTask[i], function (err) {
        if (err) {
          console.log("error");
          return;
        }
        console.log("deleted");
      });
    }
  }
  return res.redirect("back");
};
