import { InjectionToken } from '@angular/core';

/**
 * Injection token providing the url to request exchangeToken without exposing the clientSecret.
 */
export const BACKEND_EXCHANGE_TOKEN_URL = new InjectionToken<string>('BACKEND_EXCHANGE_TOKEN_URL');

/**
 * Injection token providing the url to request refreshToken without exposing the clientSecret.
 */
export const BACKEND_REFRESH_TOKEN_URL = new InjectionToken<string>('BACKEND_REFRESH_TOKEN_URL');
