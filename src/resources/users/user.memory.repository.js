const database = require('../../db/bd');
const User = require('./user.model');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return database.users;
};

const create = async (data) => {
  const user = new User(data);
  database.users.push(user);
  return user;
};

const getUser = async (id) => {
  const user = database.users.find((x) => x.id === id);
  return user;
};

const updateUser = async (id, data) => {
  const user = database.users.find((x) => x.id === id);
  if(user) {
    user.name = data.name;
    user.login = data.login;
    user.password = data.password;
  }
  return user;
};

const deleteUser = async (id) => {
  const user = database.users.find((x) => x.id === id);
  if(user) {
    database.users = database.users.filter((x) => x.id !== id);
  }
  return user;
};

module.exports = { getAll, create, getUser, updateUser, deleteUser };
