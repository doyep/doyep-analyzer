import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RefreshTokenResponse, TokenExchangeResponse } from './token-exchange-model';

@Injectable()
export abstract class ExchangeTokenService {
  protected readonly http = inject(HttpClient);

  abstract exchange$(authorizationCode: string): Observable<TokenExchangeResponse>;
  abstract refresh$(refreshToken: string): Observable<RefreshTokenResponse>;

  deauthorize$(accessToken: string): Observable<object> {
    const url = new URL('https://www.strava.com/oauth/deauthorize');
    url.searchParams.set('access_token', accessToken);

    return this.http.post(url.toString(), {});
  }
}
