import {
  ApplicationConfig,
  DOCUMENT,
  inject,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAppConfig, ENV_STRAVA_CLIENT_ID, ENV_STRAVA_CLIENT_SECRET } from './configuration';
import {
  provideStravaServices,
  withExchangeToken,
  withAccessRequest,
  AccessRequestOptions,
} from 'ngx-strava-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppConfig(),
    provideStravaServices(
      withAccessRequest(() => {
        return {
          clientId: inject(ENV_STRAVA_CLIENT_ID),
          redirectUri: `${inject(DOCUMENT).location.origin}/exchange-token`,
          approvalPrompt: 'force',
          scopes: ['read', 'read_all', 'profile:read_all', 'activity:read_all'],
        } as AccessRequestOptions;
      }),
      withExchangeToken('CLIENT_SECRET', () => ({
        clientSecret: inject(ENV_STRAVA_CLIENT_SECRET),
      })),
    ),
  ],
};
