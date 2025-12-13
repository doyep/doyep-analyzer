import { Routes } from '@angular/router';
import { ExchangeToken } from './auth/exchange-token/exchange-token';
import { Login } from './auth/login/login';
import { NotFound } from './error/not-found/not-found';
import { inject } from '@angular/core';
import { AuthStore } from 'ngx-strava-client';

export const routes: Routes = [
  {
    path: '',
    redirectTo: () => {
      const authStore = inject(AuthStore);
      if (!authStore.isAuth()) return 'login';
      return 'not-found';
    },
    pathMatch: 'full',
  },
  { path: 'exchange-token', component: ExchangeToken },
  { path: 'login', component: Login },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: 'not-found' },
];
