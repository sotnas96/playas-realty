const { body } = require("express-validator");

const propertyValidation = [
    body("property")
        .trim()
        .notEmpty().withMessage("Cannot be empty")
        .escape(),
    body("category")
        .trim()
        .notEmpty().withMessage("Cannot be empty")
        .escape(),
    body("address")
        .trim()
        .notEmpty().withMessage("Cannot be empty")
        .escape(),
    body("description")
        .trim()
        .notEmpty().withMessage("Cannot be empty")
        .escape(),
    body("pets")
        .trim()
        .notEmpty().withMessage("Cannot be empty")
        .isBoolean()
        .escape(),
    body("parking")
        .trim()
        .notEmpty().withMessage("Cannot be empty")
        .escape(),
    body("price")
        .trim()
        .notEmpty()
        .isNumeric(),   
    body("beds")
        .trim()
        .notEmpty()
        .isNumeric(),  
    body("baths")
        .trim()
        .notEmpty()
        .isNumeric(),  
    body("year")
        .trim()
        .notEmpty()
        .isNumeric()  
]
module.exports = propertyValidation;