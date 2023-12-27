const { default: mongoose } = require("mongoose");

const productschema = new mongoose.Schema({
    title:String,
    image:String,
    category:String,
    price:Number
})

const product = mongoose.model("product",productschema)

module.exports = {product}