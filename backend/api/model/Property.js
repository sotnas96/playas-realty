const mongoose = require("mongoose");

const { Schema } = mongoose;

const Property = new Schema({
    property: String,
    city:String,
    state:String,
    zip:Number,
    category: String,
    address: String,
    sqrft: String,
    price: Number,
    beds: Number,
    baths: Number,
    year: Number,
    description: String,
    pets: Boolean,
    available: Boolean,
    parking: String, //outdoor, indoor
    utilities: [String],
    images: [String],
    extras:[String],
    type: String 
},
{
    timestamps:true
});
module.exports = Property;
// property name - address
// sqfrt - price - year
// beds bath parking
// pets  available
// utilities description
// images