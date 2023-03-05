const mongoose = require('mongoose');
require('dotenv').config();

//Connection
mongoose.connect(process.env.URI);
mongoose.connection.on("open",()=>{
    console.log("Mongoose Connection made!")
})


module.exports = mongoose;