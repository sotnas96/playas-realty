const { validationResult } = require("express-validator");
const { Property, Contact } = require("../dbconfig");
const { generateToken } = require("../utils/jwt");
const { sendEmail } = require("../utils/nodemailer");


const mainController = {
    login: (req, res) => {
        const token = generateToken( {...req.body })
        return res.status(200).json({token, success: true })
    },
    allHomes: async (req, res) => {
        const properties = await Property.find();
        const hashMap = {}
        properties.forEach( e => {
            hashMap[e._id] = e;
        })
        res.status(200).json({success:true, data: properties, hashMap:hashMap})
    },
    contact: async (req, res) => {
        const userContact = { ...req.body}
        const errors = validationResult(req)
        if (! errors.isEmpty()) {
            return res.status(400).json({success: false, errors: errors.array()})
        }
        try {
            const newInquerie = await Contact.create(userContact);
            if (! newInquerie) throw new Error("An error occur, please try again later")
            sendEmail(userContact)
            res.status(200).json({ success:true, data: newInquerie });
        } catch(error) {
            res.status(400).json({success:false, error: error.message});
        }
    },
    checkToken: (req, res) => {
        res.status(200).json({success: true})
    },
    getUserInqueries: async (req, res) => {
        const inqueries = await Contact.find();
        res.status(200).json({success:true, data: inqueries})
    },
    testing: async (req, res) => {
        const properties = await Property.find();

        return res.status(200).json({success:true, msg:hashMap})
    }
};
module.exports = mainController;