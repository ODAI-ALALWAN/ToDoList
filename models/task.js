const mongoose = require('mongoose')


//مجلد هيكلة البيانات 

// Define and structure the data that will be stored
const schema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    }
}); 

// تحديد تابع لاي موديل 
module.exports = mongoose.model("Task", schema);

