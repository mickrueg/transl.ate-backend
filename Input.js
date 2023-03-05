const mongoose = require('./connection');

const inputSchema = new mongoose.Schema({
    userInput: String
})

//The model name in between the ' ' below, has to be the name of the database in MongoDB. Letters must all be lowercase and MongoDB will automatically pluralize.
const Input = mongoose.model('userinput', inputSchema);

module.exports = Input;