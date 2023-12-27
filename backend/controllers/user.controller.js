const { user } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")   
const signup = async(req,res)=>{
    try {
        const {email,password,username,role} = req.body

    const data = await user.findOne({email})
    
    if(!data){
        bcrypt.hash(password,5,async(error,hash)=>{
            if(error){
                res.send(error)
            }
            else{
                const obj = {
                    email,
                    password:hash,
                    username,
                    role
                }
                const data = await user.create(obj)
                console.log(data);
                const token = jwt.sign({id:data.id},"key")
                res.json({token:token,username:data.username,msg:"signup successfull"})
            }
        })
    }   
    else{
        res.send("account already exist")
    }
    } catch (error) {
        res.send({error:error.message})
    }   
}

const login = async(req,res)=>{
    const {email,password} = req.body
    
    const data = await user.findOne({email})
    if(data){
        bcrypt.compare(password,data.password,async(error,hash)=>{
            if(error){
                res.send(error)
            }
            else if(hash){
                const data = await user.findOne({email})
                console.log(data.username);
                console.log(data);
                const token = jwt.sign({id:data.id},"key")
                res.json({token:token,username:data.username,msg:"logged in"})
            }
            else{
                res.send("password not match")
            }
        })
    }   
    else{
        res.send("data not found")
    }

}


module.exports = {login,signup}