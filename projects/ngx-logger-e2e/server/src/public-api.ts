/*
 * Public API Surface of ngx-logger-server
 */

export * from './lib/ngx-logger-e2e-server.module';
export * from './lib/mapper-fs.service';
export { NGXLoggerServer, getLoggerInstance } from './lib/ngx-logger-server';
export { serverConfigFactory } from './lib/config-factory';
