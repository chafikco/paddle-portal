const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const { catchErrors } = require("../handlers/errorHandlers");

// Do work here
router.get("/", userController.loginArea);

module.exports = router;
