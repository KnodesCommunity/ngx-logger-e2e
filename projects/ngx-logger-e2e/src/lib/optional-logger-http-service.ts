import { HttpBackend } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { NGXLoggerHttpService } from 'ngx-logger';

import { MockHttpBackend } from './mock-http-backend';

@Injectable()
export class OptionalLoggerHttpService extends NGXLoggerHttpService {
	public constructor( @Optional() httpBackend: HttpBackend ){
		super( httpBackend ?? new MockHttpBackend() );
	}
}
