const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const create = (data) => usersRepo.create(data);

const getUser = (id) => usersRepo.getUser(id);

const updateUser = (id, data) => usersRepo.updateUser(id, data);

const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, create, getUser, updateUser, deleteUser };
