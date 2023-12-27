const {Router} = require("express")
const { signup, login } = require("../controllers/user.controller")
const { product } = require("../models/product.model")

const proroute = Router()

proroute.post("/post",async(req,res)=>{
    const data = await product.create(req.body)
    res.send(data)
})

proroute.get("/all",async(req,res)=>{
    const data = await product.find()
    res.send(data)
})
// var instance = new Razorpay({
//     key_id: 'rzp_test_b8xiJEMJDde0oX',
//     key_secret: '9hQFL9ATk4eDWDnXHgBab7va',
//   });

proroute.post("/paymnet",async(req,res)=>{

})

module.exports = {proroute}