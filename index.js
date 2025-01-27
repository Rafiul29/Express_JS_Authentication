const express=require('express')
const dotenv=require('dotenv')
const app=express()
app.use(express.json())
dotenv.config()
require("./Helpers/dbConnection")
require("./MiddleWares/errorHandler")
app.use('/',require('./routes/userRouter'))

app.listen(5000,()=>{
    console.log('express connected')
})