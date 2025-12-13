import { ExchangeTokenService } from '../exchange-token';
import { StravaFeature } from '../provide-strava-services';
import { AuthStore } from './auth-store';

/**
 * Function that register Auth Store that implements Redux Pattern
 * learnt from Pierre BOUILLON
 * @returns AuthStore Strava Feature
 */
export function withAuthStore(): StravaFeature {
	return {
		ɵproviders: [
			{
				provide: AuthStore,
				useClass: AuthStore,
				deps: [ExchangeTokenService],
			},
		],
	};
}
