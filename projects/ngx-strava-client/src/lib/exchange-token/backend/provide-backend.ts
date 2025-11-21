import { Provider } from '@angular/core';

import {
	BACKEND_EXCHANGE_TOKEN_URL,
	BACKEND_REFRESH_TOKEN_URL,
	BackendTokenExchangeOptions,
	BackendTokenExchangeService,
} from '.';
import { STRAVA_TOKEN_EXCHANGE_OPTIONS } from '../tokens';
import { TokenExchangeService } from '../token-exchange.service';

/**
 * This function registers all providers required for the {@link BackendTokenExchangeService},
 *
 * @returns An array of Angular providers.
 */
export function provideBackend(): Provider[] {
	return [
		{
			provide: BACKEND_EXCHANGE_TOKEN_URL,
			useFactory: (options: BackendTokenExchangeOptions) => options.backendExchangeTokenUrl,
			deps: [STRAVA_TOKEN_EXCHANGE_OPTIONS],
		},
		{
			provide: BACKEND_REFRESH_TOKEN_URL,
			useFactory: (options: BackendTokenExchangeOptions) => options.backendRefreshTokenUrl,
			deps: [STRAVA_TOKEN_EXCHANGE_OPTIONS],
		},
		{
			provide: TokenExchangeService,
			useClass: BackendTokenExchangeService,
			deps: [BACKEND_EXCHANGE_TOKEN_URL, BACKEND_REFRESH_TOKEN_URL],
		},
	];
}
