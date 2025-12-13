import { InjectionToken } from '@angular/core';
import { TokenExchangeOptions } from './shared/token-exchange-model';

/**
 * Injection token providing the options for token exchange.
 */
export const STRAVA_TOKEN_EXCHANGE_OPTIONS = new InjectionToken<TokenExchangeOptions>(
  'STRAVA_TOKEN_EXCHANGE_OPTIONS',
);
