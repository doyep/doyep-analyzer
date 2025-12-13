import { AccessRequestOptions, AccessRequestParams } from './access-request-model';
import {
  STRAVA_ACCESS_REQUEST_OPTIONS,
  STRAVA_CLIENT_ID,
  STRAVA_OAUTH2_URL,
} from './access-request-tokens';
import { StravaFeature } from '../provide-strava-services';

/**
 * Function that build strava access request url from provided options
 * @param config
 * @returns URL as a string
 */
function buildUrl(config: AccessRequestParams): string {
  const { clientId, redirectUri, responseType, approvalPrompt, scope, state } = config;

  const url = new URL('https://www.strava.com/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', responseType);
  if (approvalPrompt) url.searchParams.set('approval_prompt', approvalPrompt);
  url.searchParams.set('scope', scope);
  if (state) url.searchParams.set('state', state);
  return url.toString();
}

/**
 * Function that CLIENT_ID and OAUTH2_URL tokens
 * @param config
 * @returns StravaFeature
 */
export function withAccessRequest(factory: () => AccessRequestOptions): StravaFeature {
  return {
    ɵproviders: [
      { provide: STRAVA_ACCESS_REQUEST_OPTIONS, useFactory: factory, deps: [] },
      {
        provide: STRAVA_CLIENT_ID,
        useValue: (options: AccessRequestOptions) => options.clientId,
        deps: [STRAVA_ACCESS_REQUEST_OPTIONS],
      },
      {
        provide: STRAVA_OAUTH2_URL,
        useFactory: (options: AccessRequestOptions) => {
          const { clientId, redirectUri, scopes, approvalPrompt, state } = options;
          const params = {
            clientId,
            redirectUri,
            scope: scopes.join(','),
            approvalPrompt,
            state,
            responseType: 'code',
          } as AccessRequestParams;
          return buildUrl(params);
        },
        deps: [STRAVA_ACCESS_REQUEST_OPTIONS],
      },
    ],
  };
}
