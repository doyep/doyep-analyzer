import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RefreshTokenResponse, TokenExchangeResponse } from '../shared/token-exchange-model';
import { BACKEND_EXCHANGE_TOKEN_URL, BACKEND_REFRESH_TOKEN_URL } from './backend-tokens';
import { ExchangeTokenService } from '../shared';

/**
 * Service implementation that performs the OAuth2 token exchange
 * through a custom backend endpoint.
 *
 * This service is the recommended and most secure method for exchanging
 * an authorization code or refreshing an access token, as it avoids
 * exposing the Strava client secret on the client-side application.
 *
 * This class extends {@link ExchangeTokenService}.
 */
@Injectable()
export class BackendEchangeToken extends ExchangeTokenService {
  readonly #echangeTokenUrl = inject(BACKEND_EXCHANGE_TOKEN_URL);
  readonly #refreshTokenUrl = inject(BACKEND_REFRESH_TOKEN_URL);

  override exchange$(authorizationCode: string): Observable<TokenExchangeResponse> {
    return this.http.post<TokenExchangeResponse>(this.#echangeTokenUrl, {
      authorizationCode: authorizationCode,
    });
  }

  override refresh$(refreshToken: string): Observable<RefreshTokenResponse> {
    return this.http.post<RefreshTokenResponse>(this.#refreshTokenUrl, {
      refreshToken: refreshToken,
    });
  }
}
