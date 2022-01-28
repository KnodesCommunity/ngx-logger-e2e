import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NGXLogger, NGXLoggerHttpService } from 'ngx-logger';

import { OptionalLoggerHttpService } from './optional-logger-http-service';

@NgModule( {
	imports: [
		CommonModule,
	],
	providers: [
		NGXLogger,
		{ provide: NGXLoggerHttpService, useClass: OptionalLoggerHttpService },
	],
} )
export class NgxLoggerE2EModule {}
