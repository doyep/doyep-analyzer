import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { RequestAccessParams, RequestAccessOptions } from './access-request';
import { STRAVA_OAUTH2_URL } from './tokens';

/**
 * Function that provide a Strava Oauth2 Url
 * @param options
 * @returns
 */
export function provideOauth2Url(options: RequestAccessOptions): EnvironmentProviders {
	return makeEnvironmentProviders([
		{
			provide: STRAVA_OAUTH2_URL,
			useFactory: () => buildUrl({ ...options, responseType: 'code' }),
		},
	]);
}

/**
 * Function that build strava access request url from provided options
 * @param config
 * @returns URL object
 */
function buildUrl(config: RequestAccessParams): URL {
	const { clientId, redirectUri, responseType, approval_prompt, scopes, state } = config;

	const url = new URL('https://www.strava.com/oauth/authorize');
	url.searchParams.set('client_id', clientId);
	url.searchParams.set('redirect_uri', redirectUri);
	url.searchParams.set('response_type', responseType);
	if (!!approval_prompt) url.searchParams.set('approval_prompt', approval_prompt);
	url.searchParams.set('scope', scopes.join(','));
	if (!!state) url.searchParams.set('state', state);

	return url;
}
