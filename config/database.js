const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

const connectDatabase = async () => {
    try {
        mongoose.connect(String(MONGO_URI), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected database")
    } catch (error) {
        console.log(error)
    }

}

module.exports = { connectDatabase };