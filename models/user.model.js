const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { type: String },
        email: { type: String },
        password: { type: String },
        newUser: { type: Boolean },
        date_create: { type: Date }
    }
)

module.exports = mongoose.model("User", userSchema);