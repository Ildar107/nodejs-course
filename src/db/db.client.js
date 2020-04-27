const { MONGO_CONNECTION_STRING } = require('../common/config');
const logger = require('../logger/winston');
const mongoose = require('mongoose');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const connectDB = fn => {
    mongoose.connect(MONGO_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', logger.error);
    db.once('open', function() {
        logger.info("db connected");
        fn();
    });
}


module.exports = { connectDB };