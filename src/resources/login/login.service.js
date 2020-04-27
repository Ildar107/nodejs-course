const loginRepo = require('./login.db.repository');

const getUser = async (login) => loginRepo.getUser(login);

module.exports = { getUser };