import { computed } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';

type AccessToken = {
  token: string;
  expiresAt: number;
};

type RefreshToken = string;

type AuthState = {
  accessToken: AccessToken | null;
  isLoading: boolean;
  refreshToken: RefreshToken | null;
};

const initialState: AuthState = {
  accessToken: null,
  isLoading: false,
  refreshToken: null,
};

export const AuthStore = signalStore(
  withState<AuthState>(initialState),
  withComputed(({ accessToken, refreshToken }) => ({
    isAuth: computed<boolean>(() => {
      const _accessToken = accessToken();
      const _refreshToken = refreshToken();

      if (_refreshToken) return true;
      if (!_accessToken) return false;
      return new Date() >= new Date(_accessToken.expiresAt);
    }),
  })),
);
