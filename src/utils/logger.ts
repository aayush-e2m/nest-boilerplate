import { createLogger, format, transports } from 'winston';
import * as fs from 'fs';
import * as path from 'path';

// Ensure logs directory exists
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Create logger instance
export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      ({
        timestamp,
        level,
        message,
      }: {
        timestamp: string;
        level: string;
        message: string;
      }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`,
    ),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(logDir, 'bootstrap.log') }), // Logs to file
  ],
});
