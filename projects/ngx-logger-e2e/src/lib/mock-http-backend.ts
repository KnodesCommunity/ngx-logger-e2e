import { HttpBackend, HttpEvent, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

export class MockHttpBackend implements HttpBackend {
	/**
	 * Default method doing nothing.
	 *
	 * @param _req - The request.
	 * @returns an observable that never emits.
	 */
	public handle( _req: HttpRequest<any> ): Observable<HttpEvent<any>> {
		return EMPTY;
	}
}
