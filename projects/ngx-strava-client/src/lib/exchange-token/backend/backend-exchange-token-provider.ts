import { Provider } from '@angular/core';

import {
  BACKEND_EXCHANGE_TOKEN_URL,
  BACKEND_REFRESH_TOKEN_URL,
  BackendExchangeTokenOptions,
  BackendEchangeToken,
} from '.';
import { STRAVA_TOKEN_EXCHANGE_OPTIONS } from '../tokens';
import { ExchangeTokenService } from '../shared';

/**
 * This function registers all providers required for the {@link BackendEchangeToken},
 *
 * @returns An array of Angular providers.
 */
export function provideBackendExchangeToken(): Provider[] {
  return [
    {
      provide: BACKEND_EXCHANGE_TOKEN_URL,
      useFactory: (options: BackendExchangeTokenOptions) => options.backendExchangeTokenUrl,
      deps: [STRAVA_TOKEN_EXCHANGE_OPTIONS],
    },
    {
      provide: BACKEND_REFRESH_TOKEN_URL,
      useFactory: (options: BackendExchangeTokenOptions) => options.backendRefreshTokenUrl,
      deps: [STRAVA_TOKEN_EXCHANGE_OPTIONS],
    },
    {
      provide: ExchangeTokenService,
      useClass: BackendEchangeToken,
      deps: [BACKEND_EXCHANGE_TOKEN_URL, BACKEND_REFRESH_TOKEN_URL],
    },
  ];
}
