const { body } = require("express-validator");

const contactValidation = [
    body("name")
        .trim()
        .notEmpty()
        .optional(),
    body("surname")
        .trim()
        .notEmpty(),
    body("email")
        .trim()
        .notEmpty()
        .isEmail().withMessage("Please enter a valid email"),
    body("message")
        .trim(),
    body('number')
        .trim()
];
module.exports = contactValidation;