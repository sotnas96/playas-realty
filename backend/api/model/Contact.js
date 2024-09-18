const  mongoose = require("mongoose");
const { Schema } = mongoose;

const Contact = new Schema({
    name: String,
    surname: String,
    email: String,
    message: String,
    number: String
},{
    timestamps: true
})
module.exports = Contact;