const express = require("express");
const app = express();

const crudRoutes = require('./routes/Crudoperations');

const mongoose = require("mongoose");
const url = "mongodb://localhost/HarshModi";

mongoose.connect(url);

const conn = mongoose.connection;

app.use(express.json());
conn.on('open', ()=>{
    console.log("connected to db")
})
app.use('/harsh',crudRoutes);

app.listen(6000, ()=>{
    console.log('server is on port 6000');
})

