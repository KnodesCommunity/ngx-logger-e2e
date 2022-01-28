import { LoggerConfig } from 'ngx-logger';

import { ISharedLoggerConfig } from '@scitizen/ngx-logger-e2e';

export type IServerLoggerConfig = ISharedLoggerConfig

export const serverConfigFactory = ( config: ISharedLoggerConfig ): LoggerConfig => ( {
	...config,
} );
