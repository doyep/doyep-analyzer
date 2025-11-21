import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RefreshTokenResponse, TokenExchangeResponse } from './token-exchange';

@Injectable()
export abstract class TokenExchangeService {
	protected readonly http = inject(HttpClient);

	abstract exchangeToken$(authorizationCode: string): Observable<TokenExchangeResponse>;
	abstract refreshToken$(refreshToken: string): Observable<RefreshTokenResponse>;

	deauthorize$(accessToken: string): Observable<object> {
		const url = new URL('https://www.strava.com/oauth/deauthorize');
		url.searchParams.set('access_token', accessToken);

		return this.http.post(url.toString(), {});
	}
}
