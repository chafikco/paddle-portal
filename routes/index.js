const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const manageController = require("../controllers/manageController");
const credentialsController = require("../controllers/credentialsController");

const { catchErrors } = require("../handlers/errorHandlers");

// login area
router.get("/", userController.loginArea);
router.get("/login", userController.loginArea);

// middleware to save the login details to variables.env
router.post("/save", credentialsController.saveCredentials);

// manage and change area
router.get("/manage", manageController.showPlan);
router.get("/change", manageController.changePlan);
router.get("/billinghistory", manageController.viewReceipts);
router.get("/updatequantity/:quantity", manageController.updateQuantity);
router.get("/updateplan/:plan", manageController.updatePlan);

module.exports = router;
