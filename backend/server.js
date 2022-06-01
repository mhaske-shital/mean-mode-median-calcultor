const express = require('express')
const app = express()
const env=require("dotenv")
const cors=require("cors")
app.use(cors())
env.config({path:"./config/.env"})
const db=require('./config/db')
db()

app.use(express.json())

const user=require("./routes/user-routes")
const auth=require("./routes/auth-route")
app.use("/api/v1",user)
app.use("/api/v1",auth)
app.listen(process.env.PORT||5000 , () => console.log( `http://localhost:${process.env.PORT}`))