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
        .optional()
        .trim()
        .escape(),
    body("parking")
        .optional()
        .trim()
        .escape(),
    body("price")
        .trim()
        .notEmpty(),
    body("beds")
        .optional()
        .trim(),
    body("baths")
        .optional()
        .trim()
]
module.exports = propertyValidation;