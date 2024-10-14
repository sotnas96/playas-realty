const express = require("express");
const adminRoute = require("./admin");
const mainController = require("../controller/mainController");
const mainRouter = express.Router();
const adminAuth = require("../utils/adminAuth");
const loginValid = require("../utils/loginValidation");
const contactValid = require("../validations/contactValidation");

mainRouter.get("/", mainController.allHomes);
mainRouter.get("/hashmap", mainController.testing);


mainRouter.get("/inqueries", adminAuth, mainController.getUserInqueries)
mainRouter.post("/contact", contactValid, mainController.contact)


//add validation
mainRouter.post("/login", loginValid, mainController.login);
mainRouter.get("/checkToken", adminAuth, mainController.checkToken);
mainRouter.use("/admin", adminAuth, adminRoute); 

module.exports = mainRouter;