const router = require('express').Router();
const TaskController = require('../Controller/task');


//FIND ALL TASKS
router.get('/', TaskController.index);
//create a new task 
router.post('/create', TaskController.create);
// UPDATE TASK
router.get('/update/:id', TaskController.edit);
// ADD UPDATE TASK TO DATEBASE
router.put('/update/:id', TaskController.update);
// DELETE TASK
router.delete('/delete/:id', TaskController.delete);



module.exports = router;
