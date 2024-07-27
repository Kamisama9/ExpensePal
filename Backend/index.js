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
    origin: ["https://expense-pal.vercel.app"],
    methods:['POST','GET','DELETE'],
    credentials:true,
  };
  
  //Add Access Control Allow Origin headers
  app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://expense-pal.vercel.app"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(cors(corsOptions));

db();

app.use('/api/v1',transaction)
app.post('/',(req,res)=>{
    res.send('Hello')
})
app.listen(PORT,()=>{
    console.log("Listening on Port: ",PORT)
})

