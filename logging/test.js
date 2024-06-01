const { LOGGING_TYPES } = require('./constants/constants');
const Logger = require('./logging/logger');
const LogModel = require('./logging/log-model');

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
        const _logger = new Logger(LOGGING_TYPES.CRITICAL);
        await _logger.log(new LogModel({
            date: Date.now(),
            warning: "Bot is having a panic attack right now!"
        }));

    } catch (error) {
        const logger = new Logger(LOGGING_TYPES.ERROR);
        await logger.log(new LogModel({
            error: error.stack
        }));
    };
};

newTestMethod();