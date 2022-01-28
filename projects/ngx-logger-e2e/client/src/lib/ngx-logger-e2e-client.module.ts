import { CommonModule, DatePipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CustomNGXLoggerService, LoggerConfig, LoggerModule, NGXLogger, NGXLoggerHttpService, NGXMapperService } from 'ngx-logger';

import { OptionalLoggerHttpService } from '@scitizen/ngx-logger-e2e';

import { MapperClientService } from './mapper-client.service';

@NgModule( {
	imports: [
		CommonModule,
		LoggerModule,
	],
	providers: [
		NGXLogger,
		NGXLoggerHttpService,
		CustomNGXLoggerService,
		NGXMapperService,
		DatePipe,
	],
} )
export class NgxLoggerE2EClientModule {
	/**
	 * Initialize the module for a client environment.
	 *
	 * @param config - The logger configuration
	 * @returns the module with providers.
	 */
	public static forRoot( config: LoggerConfig | null | undefined ): ModuleWithProviders<NgxLoggerE2EClientModule> {
		return {
			ngModule: NgxLoggerE2EClientModule,
			providers: [
				{ provide: LoggerConfig, useValue: config || {}},
				NGXLogger,
				{ provide: NGXLoggerHttpService, useClass: OptionalLoggerHttpService },
				{ provide: NGXMapperService, useClass: MapperClientService },
			],
		};
	}
}
