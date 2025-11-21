import { Provider } from '@angular/core';
import { StravaFeature } from '../provide-strava-services';

import { STRAVA_TOKEN_EXCHANGE_OPTIONS, TokenExchangeOptions, TokenExchangeType } from '.';
import { provideClientSecret } from './client-secret';
import { provideBackend } from './backend';

export function withExchangeToken(
	type: TokenExchangeType,
	factory: () => TokenExchangeOptions,
): StravaFeature {
	const providers: Provider[] = [
		{
			provide: STRAVA_TOKEN_EXCHANGE_OPTIONS,
			useFactory: factory,
			deps: [],
		},
	];

	if (type === 'CLIENT_SECRET') {
		providers.push(...provideClientSecret());
	}

	if (type === 'BACKEND') {
		providers.push(...provideBackend());
	}

	return { ɵproviders: providers };
}
