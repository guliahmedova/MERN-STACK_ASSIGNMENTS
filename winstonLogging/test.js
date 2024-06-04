const { LOGGING_TYPES } = require('./constants/constants');
const { LOGLEVELS } = require('./constants/logLevels');
const Logger = require('./logging/logger');
const LogModel = require('./logging/log-model');
const WinstonLogger = require('./logging/winston-logger');

const newTestMethod = async () => {
    try {
        // Telegram
        // throw new Error();

        // Discord
        // const _logger = new Logger(LOGGING_TYPES.WARNING);
        // await _logger.log(new LogModel({
        //     date: Date.now(),
        //     warning: "Our bot is allergic to spam!"
        // }));

        // Slack 
        // const _logger = new Logger(LOGGING_TYPES.CRITICAL);
        // await _logger.log(new LogModel({
        //     date: Date.now(),
        //     warning: "Bot is having a panic attack right now!"
        // }));

        //DB LOGGER
        // const _logger = new Logger(LOGGING_TYPES.INFO);
        // await _logger.log(new LogModel({
        //     date: Date.now(),
        //     warning: "Bot is having a panic attack right now!"
        // }));

        //winston 
        const _logger = new WinstonLogger(LOGGING_TYPES.INFO);
        await _logger.log(new LogModel({
            date: Date.now(),
            title: "Guli Ahmedova"
        }));

    } catch (error) {
        const logger = new Logger(LOGGING_TYPES.ERROR);
        await logger.log(new LogModel({
            error: error.stack
        }));
    };
};

newTestMethod();