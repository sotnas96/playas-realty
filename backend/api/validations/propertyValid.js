const { body } = require("express-validator");

const propertyValidation = [
    body("property")
        .trim()
        .notEmpty().withMessage("Porfavor elija un nombre de la propiedad")
        .escape(),
    body("category")
        .trim()
        .notEmpty().withMessage("Porfavor elija una categoria")
        .escape(),
    body("address")
        .trim()
        .notEmpty().withMessage("Porfavor complete la dirección")
        .escape(),
    body("description")
        .trim()
        .notEmpty().withMessage("Porfavor complete la descripción")
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
        .notEmpty().withMessage("Please add a price")
        .isNumeric().withMessage("Please only numbers on price field"),
    body('currency')
        .trim()
        .notEmpty().withMessage('Please select a currency'),
    body('available')
        .trim()
        .notEmpty().withMessage('Please select availability')
        .isBoolean(),
    body('sqrft')
        .trim()
        .notEmpty().withMessage('Porfavor complete superficie')
        .isNumeric().withMessage('Porfavor solo numeros en superficie'),
    body("beds")
        .optional()
        .trim(),
    body("baths")
        .optional()
        .trim()
]
module.exports = propertyValidation;