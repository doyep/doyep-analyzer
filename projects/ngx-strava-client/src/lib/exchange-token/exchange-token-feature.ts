import { Provider } from '@angular/core';
import { StravaFeature } from '../provide-strava-services';

import { STRAVA_TOKEN_EXCHANGE_OPTIONS, TokenExchangeOptions, TokenExchangeType } from '.';
import { provideClientSecretExchangeToken } from './client-secret';
import { provideBackendExchangeToken } from './backend';

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
		providers.push(...provideClientSecretExchangeToken());
	}

	if (type === 'BACKEND') {
		providers.push(...provideBackendExchangeToken());
	}

	return { ɵproviders: providers };
}
