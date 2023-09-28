const express = require('express');
const app = express();
const port=5000;
const mongoose=require('mongoose');
const authRoute = require('./routes/auth');

require("./db.conn/db");

app.use(express.json());
app.use("/apis/auth", authRoute);


app.get('/', function(req, res) {
    res.send("Hello, world! ");
})

app.listen(port , () => {
    console.log(`The port is running at ${port}`);
})