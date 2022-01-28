import { DatePipe } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LoggerConfig, NGXLogger, NGXLoggerHttpService } from 'ngx-logger';

import { MapperFsService } from './mapper-fs.service';

let instance: NGXLoggerServer | undefined;
export const getLoggerInstance = (): NGXLoggerServer => {
	if( !instance ){
		throw new Error( 'Nope' );
	}
	return instance;
};

@Injectable( { providedIn: 'root' } )
export class NGXLoggerServer extends NGXLogger {
	public constructor(
		mapperService: MapperFsService,
		httpService: NGXLoggerHttpService,
		loggerConfig: LoggerConfig,
		@Inject( PLATFORM_ID ) platformId: unknown,
		datePipe: DatePipe,
	) {
		super( mapperService as any, httpService, loggerConfig, platformId, datePipe );
		instance = this;
	}
}
