const express = require("express");
const adminRoute = express.Router();
const adminController = require("../controller/adminController");
const propertyValidation = require("../validations/propertyValid");
const upload = require("../utils/multer");


//add middleware (check user login)
adminRoute.post("/create", propertyValidation, adminController.createProperty);
adminRoute.post("/uploadImages", upload.array('houseImg', 50), adminController.uploadImages);
adminRoute.patch("/edit", upload.array('houseImg', 40), adminController.editProperty);
adminRoute.delete("/delete", adminController.deleteProperty);
adminRoute.get("/inqueries", adminController.getInqueries);
module.exports = adminRoute;