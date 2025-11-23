import {
	EnvironmentProviders,
	inject,
	InjectionToken,
	makeEnvironmentProviders,
	provideAppInitializer,
} from '@angular/core';
import { ConfigService } from './config.service';

export const ENV_STRAVA_CLIENT_ID = new InjectionToken<string>('ENV_STRAVA_CLIENT_ID');
export const ENV_STRAVA_CLIENT_SECRET = new InjectionToken<string>('ENV_STRAVA_CLIENT_SECRET');

export function provideAppConfig(): EnvironmentProviders {
	return makeEnvironmentProviders([
		ConfigService,
		provideAppInitializer(async () => {
			const service = inject(ConfigService);
			return await service.load();
		}),
		{ provide: ENV_STRAVA_CLIENT_ID, useFactory: () => inject(ConfigService).get('clientId') },
		{
			provide: ENV_STRAVA_CLIENT_SECRET,
			useFactory: () => inject(ConfigService).get('clientSecret'),
		},
	]);
}
