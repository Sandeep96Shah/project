//adding the express library
const express = require("express");

//getting the functionality of express.Router
const router = express.Router();

//getting the controller
const homeController = require("../controllers/home");

//routes
router.get("/", homeController.home);
router.post("/delete-task", homeController.delete);
router.post("/create-task", homeController.create);

//exporting
module.exports = router;
