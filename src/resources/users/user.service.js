const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const create = (data) => usersRepo.create(data);

const getUser = (id) => usersRepo.getUser(id);

const updateUser = (id, data) => usersRepo.updateUser(id, data);

const deleteUser = async (id) => {
    const user = await usersRepo.deleteUser(id);
    if(user) {
        tasksService.clearUsers(id);
    }
    return user;
}

module.exports = { getAll, create, getUser, updateUser, deleteUser };
