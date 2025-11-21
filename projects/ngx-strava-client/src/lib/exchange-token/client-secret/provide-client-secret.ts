import { Provider } from '@angular/core';

import { STRAVA_CLIENT_ID } from '../../access-request';
import {
	ClientSecretTokenExchangeOptions,
	ClientSecretTokenService,
	STRAVA_CLIENT_SECRET,
} from '.';
import { STRAVA_TOKEN_EXCHANGE_OPTIONS } from '../tokens';
import { TokenExchangeService } from '../token-exchange.service';

/**
 * This function registers all providers required for the {@link ClientSecretTokenExchangeService},
 *
 * @returns An array of Angular providers.
 */
export function provideClientSecret(): Provider[] {
	return [
		{
			provide: STRAVA_CLIENT_SECRET,
			useFactory: (options: ClientSecretTokenExchangeOptions) => options.clientSecret,
			deps: [STRAVA_TOKEN_EXCHANGE_OPTIONS],
		},
		{
			provide: TokenExchangeService,
			useClass: ClientSecretTokenService,
			deps: [STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET],
		},
	];
}
