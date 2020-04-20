const Task = require('./task.model');

const getAll = async () => {
    return Task.find({});
};

const create = async (task, boardId) => {
  if(!task.boardId) {
    task.boardId = boardId;
  }
  return Task.create(task);
};

const getTask = async (id) => {
    return Task.findOne({ id: id });
};

const updateTask = async (id, task) => {
    return Task.updateOne({ id: id }, task);
};

const deleteTask = async (id) => {
  return (await Task.deleteOne({ id: id })).deletedCount;
};

const clearUsers = async(userId) => {
    return Task.updateMany({ userId: userId}, { userId: null });
}

const deleteAllBoardTasks = async(boardId) => {
    return (await Task.deleteMany({ boardId: boardId})).deletedCount;
}


module.exports = { getAll, create, getTask, updateTask, deleteTask, clearUsers, deleteAllBoardTasks };