import { CommonModule, DatePipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomNGXLoggerService, LoggerConfig, NGXLogger, NGXLoggerHttpService, NGXMapperService } from 'ngx-logger';

import { MapperFsService } from './mapper-fs.service';
import { NGXLoggerServer as NGXLoggerServer } from './ngx-logger-server';

@NgModule( {
	imports: [
		CommonModule,
	],
	providers: [
		NGXLoggerServer,
		NGXLoggerHttpService,
		CustomNGXLoggerService,
		NGXMapperService,
		DatePipe,
	],
} )
export class NgxLoggerE2EServerModule {
	/**
	 * Initialize the module for a SSR server environment.
	 *
	 * @param config - The logger configuration
	 * @returns the module with providers.
	 */
	public static forRoot( config: LoggerConfig | null | undefined ): ModuleWithProviders<NgxLoggerE2EServerModule> {
		return {
			ngModule: NgxLoggerE2EServerModule,
			providers: [
				{ provide: LoggerConfig, useValue: config || {}},
				{ provide: NGXLogger, useClass: NGXLoggerServer },
				NGXLoggerHttpService,
				CustomNGXLoggerService,
				{ provide: NGXMapperService, useClass: MapperFsService },
			],
		};
	}
}
