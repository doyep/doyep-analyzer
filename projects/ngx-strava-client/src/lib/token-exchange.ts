/**
 * Params needed to request a Strava JWT
 * @deprecated See {@link STRAVA_APP_CLIENT_SECRET}
 */
export type TokenExchangeParams = {
	clientId: string;
	clientSecret: string;
	code: string;
	grantType: string;
};

/**
 * Params needed from Angular Application to request a Strava jwt.
 * @deprecated See {@link STRAVA_APP_CLIENT_SECRET}
 */
export type TokenExchangeOptions = Omit<TokenExchangeParams, 'grantType'>;

/**
 * Exchange token with the Strava JWT
 */
export type TokenExchangeResponse = {
	token_type: string;
	expires_at: number;
	expires_in: number;
	refresh_token: string;
	access_token: string;
	athlete: any; // TODO - implement athlete type
};

export type RefreshTokenResponse = Omit<TokenExchangeResponse, 'athlete'>;
