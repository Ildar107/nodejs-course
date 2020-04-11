const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = (data, boardId) => tasksRepo.create(data, boardId);

const getTask = (id) => tasksRepo.getTask(id);

const updateTask = (id, data) => tasksRepo.updateTask(id, data);

const deleteTask = (id) => tasksRepo.deleteTask(id);

module.exports = { getAll, create, getTask, updateTask, deleteTask };