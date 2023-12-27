const {Router} = require("express")
const { signup, login, logout } = require("../controllers/user.controller")
const userroute = Router()

userroute.post("/signup",signup)

userroute.post("/login",login)

// userroute.post("/logout",logout)

module.exports = {userroute}