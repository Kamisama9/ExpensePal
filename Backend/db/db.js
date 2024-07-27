const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    console.log('MONGO_URL:', process.env.MONGO_URL); // Debug log
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connected');
    } catch (error) {
        console.log('DB CONNECTION ISSUES');
        console.error(error);
        process.exit(1);
    }
};

module.exports = { db };
