import { TestBed } from '@angular/core/testing';

import { MapperFsService } from './mapper-fs.service';

describe( 'MapperFsService', () => {
	let service: MapperFsService;

	beforeEach( () => {
		TestBed.configureTestingModule( {} );
		service = TestBed.inject( MapperFsService );
	} );

	it( 'should be created', () => {
		expect( service ).toBeTruthy();
	} );
} );
