import { Routes } from '@angular/router';
import { ExchangeToken } from './auth/exchange-token/exchange-token';
import { Login } from './auth/login/login';
import { NotFound } from './error/not-found/not-found';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'exchange-token', component: ExchangeToken },
	{ path: 'login', component: Login },
	{ path: 'not-found', component: NotFound },
	{ path: '**', redirectTo: 'not-found' },
];
