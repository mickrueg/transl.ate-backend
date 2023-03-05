const express = require('express');
const cors = require('cors');
const app = express();
require('./connection');

//Controllers
const inputController = require('./inputController');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//This CORS MUST be before the other app.use's below. Order matters in Node I guess.
app.use(cors());

app.use('/fromInputs',inputController);

app.listen(8000, ()=>{
    console.log("Server started")
})