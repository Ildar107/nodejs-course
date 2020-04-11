const logger = require('../logger/winston');

const errorHandler = (error) => {
    if(error.message !== undefined) {
        logger.error(error.message);
    } else {
        logger.error(error);
    }
    process.exit(1);
}

module.exports = errorHandler;