const { LOGGING_TYPES } = require('../constants/constants');
const WinstonLogger = require('./winston-logger');

class Logger {
    constructor(logType) {
        this.logType = logType;
    };

    async log(logModel) {
        switch (this.logType) {
            case LOGGING_TYPES.INFO:
                const wnLoggwe = new WinstonLogger();
                await wnLoggwe.log(logModel);
                break;
            default:
                break;
        };
    };
};

module.exports = Logger;