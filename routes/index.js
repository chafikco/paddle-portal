const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const manageController = require("../controllers/manageController")

const { catchErrors } = require("../handlers/errorHandlers");

// Do work here
router.get("/", userController.loginArea);
router.get("/manage", manageController.manageSubscription)

module.exports = router;
