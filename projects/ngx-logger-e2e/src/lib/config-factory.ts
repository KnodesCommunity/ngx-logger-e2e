import { NgxLoggerLevel, LoggerConfig as _LoggerConfig } from 'ngx-logger';

type LoggerConfig = {[K in keyof _LoggerConfig]: _LoggerConfig[K]};
export interface ISharedLoggerConfig extends Omit<LoggerConfig, 'serverLoggingUrl' | 'serverLogLevel'> {
	/**
	 * Defaults to `false`.
	 */
	e2eLogging?: boolean;
	e2eLoggingUrl?: string;
	e2eLogLevel?: NgxLoggerLevel;
}
const defaultEndpoint = '/log-client';
export const getLogHttpEndpoint = ( config: ISharedLoggerConfig ): string | null => config.e2eLogging ?
	config.e2eLoggingUrl ?? defaultEndpoint :
	null;
