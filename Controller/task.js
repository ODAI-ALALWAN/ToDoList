const Task = require("../models/task");
// مجلد العمليات
module.exports = {
    //عرض البيانات
    index: (req, res) => {
        Task.find({}, (error, tasks) => {
            if (error) console.log(`There was an error : ${error}`);
            else {
                res.render("todo.ejs", { todotasks: tasks });
            }
        });
    },
    //انشاء تاسك
    create: (req, res) => {
        const firstTask = new Task({ title: req.body.title });
        firstTask.save().then(() => res.redirect("/"));
    },
    // تعديل البيانات
    edit: (req, res) => {
        const id = req.params.id
        Task.find({}, (err, tasks) => {
            res.render("todoEdit.ejs", { todotasks: tasks, idTask: id } ); 
        });
    },
    // اضافة تعديل على قاعدة البيانات
    update: (req, res) => {
        const id = req.params.id;
        Task.findByIdAndUpdate(id, { title: req.body.title }, err => {
            if (err) return res.send(500, err);
            else res.redirect('/');
        });
    },
    // حذف المهام
    delete: (req, res) => {
        Task.deleteOne({_id: req.params.id }, (error) => {
            if (error) console.log(`There is ${error}`);
            else {
                res.redirect('/')
            }
        });
    }

}