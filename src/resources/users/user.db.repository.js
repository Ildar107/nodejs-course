const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const create = async (user) => {
  return User.create(user);
};

const getUser = async (id) => {
    return User.findOne({ id: id });
};

const updateUser = async (id, user) => {
  return User.updateOne({ id: id }, user);
};

const deleteUser = async (id) => {
    return (await User.deleteOne({ id: id })).deletedCount;
};

module.exports = { getAll, create, getUser, updateUser, deleteUser };
