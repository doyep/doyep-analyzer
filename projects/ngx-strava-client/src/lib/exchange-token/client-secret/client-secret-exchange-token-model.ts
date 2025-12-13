/**
 * Options required to configure the {@link ClientSecretTokenExchangeService}.
 *
 * @deprecated Exposing the client secret in a frontend application is insecure.
 * Use {@link BackendTokenExchangeService} with a backend-based token exchange instead.
 */
export type ClientSecretExchangeTokenOptions = {
  clientSecret: string;
};
