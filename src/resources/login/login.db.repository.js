const User = require('../users/user.model');

const getUser = async (login) => {
    return await User.findOne({ login: login });
};


module.exports = { getUser };