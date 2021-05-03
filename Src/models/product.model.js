
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    ComanyName: {
        type: String,
        trim: true,
        required: true,
        enum: ["Programming", "DB", "AI", "Software", "hardWare"]
    },
    ProductName: {
        type: String,
        required: true,
       
    },
    Type: {
        type: String,
        trim: true,
        required: true,
    },
    Inches: {
        type: Number,
        required: true,
    },
    resolution: {
        type: String,
        required: true,
    },
    cpu: {
        type: String,
        required: true,
    },
    ram:{
        type: String,
        required: true,
    },
    memory:{
        type: String,
        required: true,
    },
    graphics:{
        type: String,
        required: true,
    },
    OpSystem:{
        type: String,
        required: true,
        enum: ["macOs", "No os", "windows", "Mac OS X", "linux","Android"]
    },
    weight:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }


});


module.exports = mongoose.model("Product", productSchema, "Product");