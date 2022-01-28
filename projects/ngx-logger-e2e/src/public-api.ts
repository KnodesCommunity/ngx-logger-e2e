/*
 * Public API Surface of ngx-logger-e2e
 */

export * from './lib/ngx-logger-e2e.module';
export { ISharedLoggerConfig, getLogHttpEndpoint } from './lib/config-factory';
export { MockHttpBackend } from './lib/mock-http-backend';
export { OptionalLoggerHttpService } from './lib/optional-logger-http-service';
export { NGXLogger } from 'ngx-logger';
