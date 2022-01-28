import { LoggerConfig } from 'ngx-logger';

import { ISharedLoggerConfig, getLogHttpEndpoint } from '@scitizen/ngx-logger-e2e';

export const browserConfigFactory = ( config: ISharedLoggerConfig ): LoggerConfig => ( {
	...config,
	serverLoggingUrl: getLogHttpEndpoint( config ) ?? undefined,
	serverLogLevel: config.e2eLogLevel,
} );
