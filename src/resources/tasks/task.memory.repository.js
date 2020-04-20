const database = require('../../db/bd');
const Task = require('./task.model');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return database.tasks;
};

const create = async (data, boardId) => {
  if(!data.boardId) {
    data.boardId = boardId;
  }
  const task = new Task(data);
  database.tasks.push(task);
  return task;
};

const getTask = async (id) => {
  const task = database.tasks.find((x) => x.id === id);
  return task;
};

const updateTask = async (id, data) => {
  const task = database.tasks.find((x) => x.id === id);
  if(task) {
    task.title = data.title;
    task.order = data.order;
    task.description = data.description;
    task.userId = data.userId;
    task.boardId = data.boardId;
    task.columnId = data.columnId;
  }
  return task;
};

const deleteTask = async (id) => {
  const task = database.tasks.find((x) => x.id === id);
  if(task) {
    database.tasks = database.tasks.filter((x) => x.id !== id);
  }
  return task;
};

const clearUsers = async(userId) => {
  database.tasks.filter((x) => x.userId === userId).map((x) => {
    x.userId = null
    return x;
  })
}

module.exports = { getAll, create, getTask, updateTask, deleteTask, clearUsers };