const mongoose = require('mongoose')


// Define and structure the data that will be stored
const schema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    }
}); 


module.exports = mongoose.model("Task", schema);

