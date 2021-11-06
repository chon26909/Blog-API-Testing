require("dotenv").config();
require("./config/database").connectDatabase()

const express = require("express");
const app = express();

app.use(express.json());


//routes
const postRoutes = require("./routes/postRoute");


app.use("/post",postRoutes);

module.exports = app;