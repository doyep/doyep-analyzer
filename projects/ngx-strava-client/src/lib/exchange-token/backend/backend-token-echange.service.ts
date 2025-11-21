import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RefreshTokenResponse, TokenExchangeResponse } from '../token-exchange';
import { TokenExchangeService } from '../token-exchange.service';
import { BACKEND_EXCHANGE_TOKEN_URL, BACKEND_REFRESH_TOKEN_URL } from './tokens';

/**
 * Service implementation that performs the OAuth2 token exchange
 * through a custom backend endpoint.
 *
 * This service is the recommended and most secure method for exchanging
 * an authorization code or refreshing an access token, as it avoids
 * exposing the Strava client secret on the client-side application.
 *
 * This class extends {@link TokenExchangeService}.
 */
@Injectable()
export class BackendTokenExchangeService extends TokenExchangeService {
	readonly #echangeTokenUrl = inject(BACKEND_EXCHANGE_TOKEN_URL);
	readonly #refreshTokenUrl = inject(BACKEND_REFRESH_TOKEN_URL);

	override exchangeToken$(authorizationCode: string): Observable<TokenExchangeResponse> {
		return this.http.post<TokenExchangeResponse>(this.#echangeTokenUrl, {
			authorizationCode: authorizationCode,
		});
	}

	override refreshToken$(refreshToken: string): Observable<RefreshTokenResponse> {
		return this.http.post<RefreshTokenResponse>(this.#refreshTokenUrl, {
			refreshToken: refreshToken,
		});
	}
}
