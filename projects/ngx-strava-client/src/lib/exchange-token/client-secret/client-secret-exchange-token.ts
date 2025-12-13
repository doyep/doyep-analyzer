import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { STRAVA_CLIENT_ID } from '../../access-request';
import { ExchangeToken } from '../shared/exchange-token';
import { RefreshTokenResponse, TokenExchangeResponse } from '../shared/token-exchange-model';
import { STRAVA_CLIENT_SECRET } from './client-secret-tokens';

/**
 * @deprecated This service performs the OAuth2 token exchange directly from the client
 * by sending the Strava client secret in the request. Exposing the client secret in a
 * frontend application is a major security risk and should be avoided.
 *
 * Use {@link BackendTokenExchangeService} instead, which delegates token operations
 * to a secure backend.
 *
 * This class is kept for legacy or fallback scenarios in which no backend is available.
 */
@Injectable()
export class ClientSecretExchangeToken extends ExchangeToken {
  readonly #clientId = inject(STRAVA_CLIENT_ID);
  readonly #clientSecret = inject(STRAVA_CLIENT_SECRET);

  exchange$(authorizationCode: string): Observable<TokenExchangeResponse> {
    const url = new URL('https://www.strava.com/oauth/token');
    url.searchParams.set('client_id', this.#clientId);
    url.searchParams.set('client_secret', this.#clientSecret);
    url.searchParams.set('code', authorizationCode);
    url.searchParams.set('grant_type', 'authorization_code');

    return this.http.post<TokenExchangeResponse>(url.toString(), {});
  }

  refresh$(refreshToken: string): Observable<RefreshTokenResponse> {
    const url = new URL('https://www.strava.com/oauth/token');
    url.searchParams.set('client_id', this.#clientId);
    url.searchParams.set('client_secret', this.#clientSecret);
    url.searchParams.set('refresh_token', refreshToken);
    url.searchParams.set('grant_type', 'refresh_token');

    return this.http.post<TokenExchangeResponse>(url.toString(), {});
  }
}
