const { validationResult } = require("express-validator");
const { Property, Contact } = require("../dbconfig");
const uploadFileToFirebase = require("../utils/uploadFileFirebase");
const adminController = {
    createProperty: async (req, res) => {
        const errors = validationResult(req);
        if (! errors.isEmpty()) {
            return res.status(400).json({success: false, errors:errors.array()});
        }
        try {    
            const property = await Property.create({...req.body});
            return res.json({success:true, data: property})
        } catch(error) {
            res.status(400).json({success: false, error: error.message})
        }
    },
    uploadImages: async (req, res) => {
        const{id, type, property }= JSON.parse(req.body.info);

        if (!req.files) {
            return res.status(400).json({success:false, message:'Please upload at least 1 images'})
        }
        try {
            const imgsUrls = await uploadFileToFirebase(req.files,  type, property);
            const updateProp = await Property.findByIdAndUpdate({_id: id},{$push: { images: { $each: imgsUrls}} }, { new: true} )
            if (!updateProp) throw new Error('Hubo un error al crear la imagen porfavor intente nuevamente')
            return res.status(200).json({success: true, data: updateProp})
        } catch(error){
            res.status(400).json({success: false, message:error.message})
        }
    },
    editProperty: async (req, res) => {
        let editedProperty = {...req.body}
        if (req.files.length) {
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