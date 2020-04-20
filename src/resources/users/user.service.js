const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const create = (user) => usersRepo.create(user);

const getUser = (id) => usersRepo.getUser(id);

const updateUser = (id, user) => usersRepo.updateUser(id, user);

const deleteUser = async (id) => {
    const count = await usersRepo.deleteUser(id);
    if(count > 0) {
        await tasksService.clearUsers(id);
    }
    return count > 0;
}

module.exports = { getAll, create, getUser, updateUser, deleteUser };
