import { json } from 'body-parser';
import express from 'express';

import { NGXLogInterface, NGXLoggerUtils, NgxLoggerLevel } from 'ngx-logger';

import { ISharedLoggerConfig, getLogHttpEndpoint } from '@scitizen/ngx-logger-e2e';
import { getLoggerInstance } from '@scitizen/ngx-logger-e2e/server';

/**
 * Generate an express middleware that binds the configured endpoint and propagate its logs as client logs.
 * If E2E logging is disabled, an empty router is returned.
 *
 * @usage ```ts
 * app.use( expressMiddleware( environment.logConfig ) );
 * ```
 *
 * @param config - The shared E2E logger config.
 * @returns a router to bind at the root of the `app`.
 */
export const expressMiddleware = ( config: ISharedLoggerConfig ): express.Router => {
	const endpoint = getLogHttpEndpoint( config );
	const router = express.Router();
	if( !endpoint ){
		return router;
	}
	router.use( json() );
	router.post( endpoint, ( req, res ) => {
		const body = req.body as NGXLogInterface;
		const level = NgxLoggerLevel[body.level];
		const metaString = NGXLoggerUtils.prepareMetaString( body.timestamp, level, body.fileName, body.lineNumber.toString() );
		( getLoggerInstance() as any )[level.toLowerCase()]( 'E2E log received:', `\n${metaString}`, body.message, ...body.additional );
		return res.send( 'Noted.' );
	} );
	return router;
};
