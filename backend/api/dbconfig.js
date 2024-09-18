const mongoose = require("mongoose");
const dotenv = require("dotenv");

const propertySchema = require("./model/Property");
const contactSchema = require("./model/Contact");
dotenv.config();

const connectionString = process.env.MONGODB_URI;

const Property =  mongoose.model("property", propertySchema);
const Contact = mongoose.model("contact", contactSchema);
const connectionToDB = async () => {
    try {
        await mongoose.connect(connectionString, 
            {
                autoIndex: true
            })
        console.log("db connection successfull")
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    connectionToDB,
    Property,
    Contact
};