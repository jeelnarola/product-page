const express = require("express")
const cors = require("cors")
const cookie = require("cookie-parser")
const { connection } = require("./config/db")
const { userroute } = require("./routes/user.route")
const { proroute } = require("./routes/product.route")
const app = express()
app.use(express.json())
app.use(cors("*"))
app.use(cookie())

app.use("/user",userroute)
app.use("/product",proroute)

app.listen(8090,()=>{
    console.log("http://localhost:8090");
    connection()
})
