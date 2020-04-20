<<<<<<< HEAD
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
=======
const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
>>>>>>> ee60976ee4afde3b2d74e4ec936dcd00a7a06e6e
