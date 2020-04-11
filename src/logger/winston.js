const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    transports: [
        new transports.File({filename: "logs/info.log", level: 'info'}),
        new transports.File({filename: "logs/error.log", level: 'error'}),
        new transports.Console({
            level: 'error',
            format: format.combine(
              format.colorize(),
              format.simple()
            )
        }) 
    ]
});

module.exports = logger;
