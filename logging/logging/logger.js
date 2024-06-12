const { LOGGING_TYPES } = require('../constants/constants');
const DbLogger = require('./db-log');
const DsLogger = require('./ds-log');
const SlackLogger = require('./slack-log');
const TgLogger = require('./tg-log');

class Logger {
    constructor(logType) {
        this.logType = logType;
    };

    async log(logModel) {
        switch (this.logType) {
            case LOGGING_TYPES.INFO:
                const dbLogger = new DbLogger(logModel);
                await dbLogger.log();
                break;
            case LOGGING_TYPES.ERROR:
                const tgLogger = new TgLogger();
                await tgLogger.log(logModel);
                break;
            case LOGGING_TYPES.WARNING:
                const dsLogger = new DsLogger();
                await dsLogger.log(logModel);
                break;
            case LOGGING_TYPES.CRITICAL:
                const slackLogger = new SlackLogger();
                await slackLogger.log(logModel);
                break;
            default:
                break;
        };
    };
};

module.exports = Logger;