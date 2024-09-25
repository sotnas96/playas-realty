const { validationResult } = require("express-validator");
const { Property, Contact } = require("../dbconfig");
const uploadFileToFirebase = require("../utils/uploadFileFirebase");
const adminController = {
    createProperty: async (req, res) => {
        //validar?
        if (!req.files) {
            return res.status(400).json({success:false, error: 'please upload images'})
        }
        const imgsUrls = await uploadFileToFirebase(req.files);

        const errors = validationResult(req);
        if (! errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        try {    
            const newProperty = {...req.body, images: imgsUrls}
            await Property.create(newProperty)
            return res.json({success:true, data:newProperty})
        } catch(error) {
            res.status(400).json({success: false, error: error.message})
        }
    },
    editProperty: async (req, res) => {
        let editedProperty = {...req.body}
        if (req.files.length) {
            console.log('existe files')
            const imgsUrls = await uploadFileToFirebase(req.files);
            editedProperty = {...editedProperty, images: imgsUrls}
        }
        try {
            const editProperty = await Property.findByIdAndUpdate({_id: req.body._id}, {...editedProperty}, {new: true})
            if (!editProperty) throw new Error("Edit failed")
            res.send({success: true, data: editProperty})
        } catch(error) {
            res.status(400).json({success: false, error: error.message})
        }

    },
    deleteProperty: async (req, res) => {
        const propertyId = req.body._id;
        try{
            const deleteProperty = await Property.findByIdAndDelete(propertyId);
            if (! deleteProperty) throw new Error("deletion failed");
            res.status(200).json({success:true, data: deleteProperty})
        } catch(error) {
            res.status(400).json({success: false, error: error.message})
        }
    },
    getInqueries: async(req, res) => {
        try {
            const inqueries = await Contact.find();
            if (!inqueries) throw new Error("No inqueries for the moment")
            return res.status(200).json({success:true, data: inqueries});
        } catch (error) {
            res.status(400).json({success: false, error: error.message})
        }
        
    }
    
}
module.exports = adminController;