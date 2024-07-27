const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log('DB CONNECTION ISSUES');
        console.error(error);
        process.exit(1);
    }
};

module.exports = { db };
