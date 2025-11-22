import { InjectionToken } from '@angular/core';

/**
 * Injection token providing the Strava App Client Secret.
 *
 * @deprecated Exposing the client secret in a frontend application is insecure.
 * It is recommended to configure a backend service to store the secret and
 * exchange the authorization code returned by the access request.
 *
 * Use this token only if absolutely necessary and with full awareness of the risks.
 */
export const STRAVA_CLIENT_SECRET = new InjectionToken<string>('STRAVA_CLIENT_SECRET');
