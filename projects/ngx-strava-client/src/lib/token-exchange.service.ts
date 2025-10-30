import { inject, Injectable } from '@angular/core';
import { STRAVA_APP_CLIENT_ID, STRAVA_APP_CLIENT_SECRET } from './tokens';
import { HttpClient } from '@angular/common/http';
import { EMPTY, map, Observable } from 'rxjs';
import { RefreshTokenResponse, TokenExchangeResponse } from './token-exchange';

/**
 * @deprecated
 */
@Injectable()
export class TokenExchangeService {
	readonly #clientId = inject(STRAVA_APP_CLIENT_ID);
	readonly #clientSecret = inject(STRAVA_APP_CLIENT_SECRET);
	readonly #http = inject(HttpClient);

	exchangeToken$(authorizationCode: string): Observable<TokenExchangeResponse> {
		const url = new URL('https://www.strava.com/oauth/token');
		url.searchParams.set('client_id', this.#clientId);
		url.searchParams.set('client_secret', this.#clientSecret);
		url.searchParams.set('code', authorizationCode);
		url.searchParams.set('grant_type', 'authorization_code');

		return this.#http.post<TokenExchangeResponse>(url.toString(), {});
	}

	refreshToken$(refreshToken: string): Observable<RefreshTokenResponse> {
		const url = new URL('https://www.strava.com/oauth/token');
		url.searchParams.set('client_id', this.#clientId);
		url.searchParams.set('client_secret', this.#clientSecret);
		url.searchParams.set('refresh_token', refreshToken);
		url.searchParams.set('grant_type', 'refresh_token');

		return this.#http.post<TokenExchangeResponse>(url.toString(), {});
	}

	deauthorize$(accessToken: string): Observable<Object> {
		const url = new URL('https://www.strava.com/oauth/deauthorize');
		url.searchParams.set('access_token', accessToken);

		return this.#http.post(url.toString(), {}).pipe(map(() => EMPTY));
	}
}
