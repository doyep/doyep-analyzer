import { InjectionToken } from '@angular/core';
import { AccessRequestOptions } from './access-request-model';

/**
 * Injection token providing the configuration options for the access request
 */
export const STRAVA_ACCESS_REQUEST_OPTIONS = new InjectionToken<AccessRequestOptions>(
	'STRAVA_ACCESS_REQUEST_OPTIONS',
);

/**
 * Injection token providing the Strava App Client ID
 */
export const STRAVA_CLIENT_ID = new InjectionToken<string>('STRAVA_CLIENT_ID');

/**
 * Injection token providing the OAuth2 authorization URL
 */
export const STRAVA_OAUTH2_URL = new InjectionToken<URL>('STRAVA_OAUTH2_URL');
