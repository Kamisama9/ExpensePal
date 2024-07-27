const express=require('express')
const cors=require('cors');
const { db } = require('./db/db');
const transaction=require('./routes/transactions')
const app=express()
require("dotenv").config()

const PORT=process.env.PORT;
//middleware
app.use(express.json())
app.use(cors())

db();

app.use('/api/v1',transaction)
app.listen(PORT,()=>{
    console.log("Listening on Port: ",PORT)
})

