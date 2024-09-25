const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const logDir = "logDir";

const logger = winston.createLogger({
  level: "silly",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: `${logDir}/produce-clearmap-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

const iso = () => {
  return new Date().toISOString();
};

logger.info(`${iso()}: clearmap production started.`);
logger.error("An error occurred");
