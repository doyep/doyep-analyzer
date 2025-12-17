import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { AuthStore } from 'ngx-strava-client';

import { ENV_WHITE_LIST } from '../../configuration';
import { ExchangeTokenParams } from './exchange-token-models';
import { StravaButton } from '../strava-button/strava-button';

@Component({
  template: `
    @if (accessDenied()) {
      ACCESS DENIED, PLEASE RETRY
      <app-strava-button />
    } @else if (authStore.isLoading()) {
      LOADING, PLEASE WAIT
    } @else if (authStore.hasError()) {
      ERROR, PLEASE RETRY
      <app-strava-button />
    } @else if (authStore.currentUser()) {
      <pre>{{ authStore.isAuth() }}</pre>
      <img class="rounded-2xl" [src]="authStore.currentUser()?.profile_medium" />
      <pre>{{ whiteList.includes(authStore.currentUser()?.id ?? 0) }}</pre>
    }
  `,
  imports: [StravaButton],
})
export class ExchangeToken {
  readonly #route = inject(ActivatedRoute);
  readonly whiteList = inject(ENV_WHITE_LIST);
  readonly authStore = inject(AuthStore);

  readonly queryParam = toSignal(this.#route.queryParamMap);
  readonly accessDenied = computed(() => this.queryParam()?.has('error'));
  readonly exchangeResponse = computed<ExchangeTokenParams | undefined>(() => {
    if (this.accessDenied()) return;
    const params = this.queryParam()!;
    return {
      state: params.get('state'),
      code: params.get('code'),
      scope: params.get('scope')?.split(','),
    } as ExchangeTokenParams;
  });

  constructor() {
    effect(() => {
      const response = this.exchangeResponse();
      if (response) {
        this.authStore.setScopes(response.scope);
        this.authStore.login(response.code);
      }
    });
  }
}
