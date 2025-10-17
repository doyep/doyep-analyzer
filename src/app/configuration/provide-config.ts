import {
	EnvironmentProviders,
	inject,
	InjectionToken,
	makeEnvironmentProviders,
	provideAppInitializer,
} from '@angular/core';
import { ConfigService } from './config.service';

const STRAVA_CLIENT_ID = new InjectionToken<string>('STRAVA_CLIENT_ID');
const STRAVA_CLIENT_SECRET = new InjectionToken<string>('STRAVA_CLIENT_SECRET');

export function provideAppConfig(): EnvironmentProviders {
	return makeEnvironmentProviders([
		ConfigService,
		provideAppInitializer(() => {
			const service = inject(ConfigService);
			return service.load();
		}),
		{ provide: STRAVA_CLIENT_ID, useFactory: () => inject(ConfigService).get('clientId') },
		{ provide: STRAVA_CLIENT_SECRET, useFactory: () => inject(ConfigService).get('clientSecret') },
	]);
}
