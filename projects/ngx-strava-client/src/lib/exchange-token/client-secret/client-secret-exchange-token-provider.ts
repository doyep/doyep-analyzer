import { Provider } from '@angular/core';

import { STRAVA_CLIENT_ID } from '../../access-request';
import {
  ClientSecretExchangeTokenOptions,
  ClientSecretExchangeToken,
  STRAVA_CLIENT_SECRET,
} from '.';
import { STRAVA_TOKEN_EXCHANGE_OPTIONS } from '../tokens';
import { ExchangeTokenService } from '../shared';

/**
 * This function registers all providers required for the {@link ClientSecretTokenExchangeService},
 *
 * @returns An array of Angular providers.
 */
export function provideClientSecretExchangeToken(): Provider[] {
  return [
    {
      provide: STRAVA_CLIENT_SECRET,
      useFactory: (options: ClientSecretExchangeTokenOptions) => options.clientSecret,
      deps: [STRAVA_TOKEN_EXCHANGE_OPTIONS],
    },
    {
      provide: ExchangeTokenService,
      useClass: ClientSecretExchangeToken,
      deps: [STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET],
    },
  ];
}
