const mongoose = require("mongoose");

const { Schema } = mongoose;

const Property = new Schema({
    property: String,
    category: String,
    address: String,
    sqrft: String,
    price: Number,
    currency: String,
    beds: Number,
    baths: Number,
    year: Number,
    description: String,
    pets: {
        type: Boolean,
        default: true
    },
    available: Boolean,
    parking: String, //outdoor, indoor
    utilities: [String],
    images: [String],
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