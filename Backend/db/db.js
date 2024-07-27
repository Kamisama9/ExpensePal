const mongoose=require('mongoose')
require("dotenv").config();
const db=async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB CONNECTION SUCCESS"))
    .catch((err) => {
        console.log(`DB CONNECTION ISSUES`);
        console.error(err.message);
        process.exit(1);
    });
}

module.exports={db}