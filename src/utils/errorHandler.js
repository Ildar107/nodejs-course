const logger = require('../logger/winston');

const errorHandler = (error) => {
    if(error.message !== undefined) {
        logger.error(error.message);
        setTimeout(() => process.exit(1), 1000);
    } else {
        logger.error(error);
    }
}

module.exports = errorHandler;