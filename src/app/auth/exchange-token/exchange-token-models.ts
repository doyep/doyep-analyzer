import { AccessRequestScope } from 'ngx-strava-client';

export type ExchangeTokenParams = {
  state: string;
  code: string;
  scope: AccessRequestScope[];
};
