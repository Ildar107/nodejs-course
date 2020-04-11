const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const tasksService = require('./task.service');


router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  console.log(req.params)
  if(!req.body) {
    res.status(400).send('Bad request');
    return;
  }
  const task = await tasksService.create(req.body, req.params.boardId);
  res.json(task);
  //res.json('The task has been created.');
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getTask(req.params.id);
  if(task !== undefined)
    res.json(task);
  else 
    res.status(404).send('Task not found');
})

router.route('/:id').put(async (req, res) => {
  if(!req.body) {
    res.status(400).send('Bad request');
    return;
  }
  const task = await tasksService.updateTask(req.params.id, req.body);
  if(task !== undefined)
    res.json('The task has been updated.');
  else 
    res.status(404).send('Task not found');
 
})

router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.deleteTask(req.params.id);
  if(task !== undefined)
    res.status(204).send('The task has been deleted');
  else 
    res.status(404).send('Task not found');
})


module.exports = router;