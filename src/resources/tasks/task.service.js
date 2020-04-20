const tasksRepo = require('./task.db.repository');

const getAll = () => tasksRepo.getAll();

const create = (data, boardId) => tasksRepo.create(data, boardId);

const getTask = (id) => tasksRepo.getTask(id);

const updateTask = (id, data) => tasksRepo.updateTask(id, data);

const deleteTask = async (id) => {
    const count = await tasksRepo.deleteTask(id);
    //console.log(count)
    return count >= 0;
};

const clearUsers = async (userId) => await tasksRepo.clearUsers(userId);

const deleteAllBoardTasks = async (boardId) => {
    const count = await tasksRepo.deleteAllBoardTasks(boardId);
    //console.log(count);
} 

module.exports = { getAll, create, getTask, updateTask, deleteTask, clearUsers, deleteAllBoardTasks };