import { DOCUMENT, inject, Injectable } from '@angular/core';
import { StravaConfigService } from './strava-config.service';

const SCOPES = ['read', 'read_all', 'profile:read_all', 'activity:read_all']

Injectable();
export class StravaAuthService {
	readonly #document = inject(DOCUMENT);
	readonly #stravaConfig = inject(StravaConfigService);

	get stravaAuthUrl() {
		const clientId = this.#stravaConfig.get('clientId');
		const redirectUri = this.#document.location.origin + '/auth';
		const scopes = SCOPES.join(',')

		const url = new URL('https://www.strava.com/oauth/authorize');
		url.searchParams.set('client_id', clientId);
		url.searchParams.set('redirect_uri', redirectUri);
		url.searchParams.set('response_type', 'code');
		url.searchParams.set('approval_prompt', 'force');
		url.searchParams.set('scope', scopes);

		return url;
	}
}
