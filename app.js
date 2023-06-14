const express = require('express');
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const router = require('./routes/tasks')


app.use(methodOverride('_method', { methods: ['POST', 'GET'] })); //تم الأستخدام للأضافة والتعديل 
app.set("view engine", "ejs");


// تسمح لي إضافة برنامج وسيط بقراءة البيانات من المستخدم ، سواء من الجسم أو الرابط
app.use(express.urlencoded({ extended: true }));


// conect with database
mongoose.connect('mongodb://127.0.0.1:27017/ToDo',{useNewUrlParser : true ,
useUnifiedTopology:true} );

// استخدام لروت لانه يعتبر مدل وير

app.use('/', router)


// // Define and structure the data that will be stored
// const schema = new mongoose.Schema({ title: String }); 
// // تحديد تابع لاي موديل 
// const Task = mongoose.model("Task", schema);

app.listen(3000,()=>console.log('express start'))