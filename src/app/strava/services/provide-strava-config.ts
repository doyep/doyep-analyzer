import {
	EnvironmentProviders,
	inject,
	makeEnvironmentProviders,
	provideAppInitializer,
} from '@angular/core';
import { StravaConfigService } from './strava-config.service';

export function provideStravaConfig(): EnvironmentProviders {
	return makeEnvironmentProviders([
		StravaConfigService,
		provideAppInitializer(() => {
			const service = inject(StravaConfigService);
			return service.load();
		}),
	]);
}
