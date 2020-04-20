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
        db.dropDatabase();
        // User.insertMany([
        //     {name: 'user1', login: 'user11', password: 'user11'},
        //     {name: 'user2', login: 'user22', password: 'user22'},
        //     {name: 'user3', login: 'user33', password: 'user33'}
        // ]);
        // Board.insertMany([
        //     { "title": "node", "columns": [{ "title": "toDO", "order": 0 }, { "title": "progress", "order": 1 }, { "title": "Done", "order": 2 },]},
        //     { "title": "english", "columns": [{ "title": "toDO", "order": 0 }, { "title": "progress", "order": 1 }, { "title": "Done", "order": 2 },]}
        // ]);
        fn();
    });
}


module.exports = { connectDB };