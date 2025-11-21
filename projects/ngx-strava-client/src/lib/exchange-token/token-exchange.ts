import { BackendTokenExchangeOptions } from './backend';
import { ClientSecretTokenExchangeOptions } from './client-secret';

/**
 * Token Exchange Type
 */
export type TokenExchangeType = 'CLIENT_SECRET' | 'BACKEND';

/**
 * Params need for TokenExchangeService
 */
export type TokenExchangeOptions = ClientSecretTokenExchangeOptions | BackendTokenExchangeOptions;

/**
 * Exchange token informations including
 * JWT and Athlete datas
 */
export type TokenExchangeResponse = {
	token_type: string;
	expires_at: number;
	expires_in: number;
	refresh_token: string;
	access_token: string;
	athlete: unknown; // TODO - implement athlete type
};

/**
 * Refresh Token informations
 */
export type RefreshTokenResponse = Omit<TokenExchangeResponse, 'athlete'>;
