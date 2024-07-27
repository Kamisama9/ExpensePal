const express=require('express')
const cors=require('cors');
const { db } = require('./db/db');
const transaction=require('./routes/transactions')
const app=express()
require("dotenv").config()

const PORT=process.env.PORT;
//middleware
app.use(express.json())
const corsOptions = {
    origin: "http://localhost:5173", // Your frontend domain
    credentials: true,
  };
  app.use(cors(corsOptions));

db();

app.use('/api/v1',transaction)
app.post('/',(req,res)=>{
    res.send('Hello')
})
app.listen(PORT,()=>{
    console.log("Listening on Port: ",PORT)
})

