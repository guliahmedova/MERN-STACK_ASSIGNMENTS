const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: "info",
    format: combine(
        timestamp(),
        // printf((info) => `${info.timestamp} - ${info.level} - ${info.message}`),
        json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "app.log", level: "info" })
    ]
});

const requestLog = { method: "GET", isAuthenticated: true };
const childLogger = logger.child(requestLog);

logger.info("an info log");
logger.error('an error log');

// logger.info("an info log", requestLog);
// logger.error('an error log', requestLog);