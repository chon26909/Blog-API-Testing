const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String  },
    title_image: { type: String },
    category: { type: String },
    content: { type: String },
    author: { type: String },
    date_create: { type: Date },
    date_update: { type: Date }
})

module.exports = mongoose.model("Post", postSchema);