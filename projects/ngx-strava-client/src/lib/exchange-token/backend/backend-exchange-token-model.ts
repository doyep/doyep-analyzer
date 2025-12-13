/**
 * Options required to configure the {@link BackendTokenExchange}.
 *
 * These values must be provided by the application and correspond
 * to the backend endpoints:
 * - the OAuth2 authorization code exchange
 * - the token refresh operation.
 */
export type BackendExchangeTokenOptions = {
  backendExchangeTokenUrl: string;
  backendRefreshTokenUrl: string;
};
