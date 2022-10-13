const express = require("express");
const app = express();
//const mysql = require('mysql');
const cors = require("cors");
const multer = require("multer");

app.use("/images",express.static(`${__dirname}/images`));
app.use(cors());
app.use(express.json());

const userRoute = require('./routes/User')
const postRoute = require('./routes/Post')
app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(3001, (req, res) => {
    console.log("Server Running...");
});