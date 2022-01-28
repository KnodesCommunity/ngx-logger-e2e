import { HttpBackend } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';

import { NGXMapperService } from 'ngx-logger';

import { MockHttpBackend } from '@scitizen/ngx-logger-e2e';

@Injectable()
export class MapperClientService extends NGXMapperService {
	public constructor( @Optional() httpBackend?: HttpBackend ){
		super( httpBackend ?? new MockHttpBackend() );
	}
}
