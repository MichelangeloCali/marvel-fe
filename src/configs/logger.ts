type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'success';

class Logger {
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel = 'debug') {
    this.logLevel = logLevel;
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = ['debug', 'info', 'warn', 'error', 'success'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  private logMessage(level: LogLevel, message: string, ...optionalParams: any[]) {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      const emoji = this.getEmoji(level);
      const colorCode = this.getColorCode(level);
      console.log(
        `\x1b[${colorCode}m[${timestamp}] [${level.toUpperCase()}] ${emoji}: ${message}\x1b[0m`,
        ...optionalParams,
      );
    }
  }

  private getEmoji(level: LogLevel): string {
    switch (level) {
      case 'debug':
        return '🐛';
      case 'info':
        return 'ℹ️';
      case 'warn':
        return '⚠️';
      case 'error':
        return '❌';
      case 'success':
        return '✅';
      default:
        return '';
    }
  }

  private getColorCode(level: LogLevel): string {
    switch (level) {
      case 'debug':
        return '37';
      case 'info':
        return '34';
      case 'warn':
        return '33';
      case 'error':
        return '31';
      case 'success':
        return '32';
      default:
        return '';
    }
  }

  debug(message: string, ...optionalParams: any[]) {
    this.logMessage('debug', message, ...optionalParams);
  }

  info(message: string, ...optionalParams: any[]) {
    this.logMessage('info', message, ...optionalParams);
  }

  warn(message: string, ...optionalParams: any[]) {
    this.logMessage('warn', message, ...optionalParams);
  }

  error(message: string, ...optionalParams: any[]) {
    this.logMessage('error', message, ...optionalParams);
  }

  success(message: string, ...optionalParams: any[]) {
    this.logMessage('success', message, ...optionalParams);
  }
}

const logger = new Logger('debug');
export { Logger, logger };
