const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const tasksService = require('./task.service');
const errorCatchWrapper = require('../../utils/errorCatchWrapper');
const { BAD_REQUEST, NOT_FOUND, OK, NO_CONTENT} = require('http-status-codes');


router.route('/').get(errorCatchWrapper(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(OK).json(tasks);
}));

router.route('/').post(errorCatchWrapper(async (req, res) => {
  if(!req.body) {
    res.status(BAD_REQUEST).send('Bad request');
    return;
  }
  const task = await tasksService.create(req.body, req.params.boardId);
  res.status(OK).json(task);
}));

router.route('/:id').get(errorCatchWrapper(async (req, res) => {
  const task = await tasksService.getTask(req.params.id);
  if(task)
    res.status(OK).json(task);
  else 
    res.status(NOT_FOUND).send('Task not found');
}));

router.route('/:id').put(errorCatchWrapper(async (req, res) => {
  if(!req.body) {
    res.status(BAD_REQUEST).send('Bad request');
    return;
  }
  const task = await tasksService.updateTask(req.params.id, req.body);
  if(task)
    res.status(OK).json('The task has been updated.');
  else 
    res.status(NOT_FOUND).send('Task not found');
 
}));

router.route('/:id').delete(errorCatchWrapper(async (req, res) => {
  const isDeleted = await tasksService.deleteTask(req.params.id);
  if(isDeleted)
    res.status(OK).send('The task has been deleted');
  else 
    res.status(NOT_FOUND).send('Task not found');
}));


module.exports = router;