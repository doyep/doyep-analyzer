import { InjectionToken } from '@angular/core';

/**
 * Injection token providing the OAuth2 authorization URL
 */
export const STRAVA_OAUTH2_URL = new InjectionToken<URL>('STRAVA_OAUTH2_URL');

/**
 * Injection token provding the Strava client id.
 */
export const STRAVA_APP_CLIENT_ID = new InjectionToken<string>('STRAVA_APP_CLIENT_ID');

/**
 * Injection token providing the Strava client secret.
 *
 * @deprecated Exposing the client secret in a frontend application is insecure.
 * It is recommended to configure a backend service to store the secret and
 * exchange the authorization code returned by the access request.
 *
 * Use this token only if absolutely necessary and with full awareness of the risks.
 */
export const STRAVA_APP_CLIENT_SECRET = new InjectionToken<string>('STRAVA_APP_CLIENT_SECRET');
