import { computed, inject, Injectable, signal } from '@angular/core';
import { AccessRequestScope } from '../access-request';
import { SummaryAthlete } from '../athlete';
import { catchError, EMPTY, filter, first, Subject, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExchangeTokenService, TokenExchangeResponse } from '../exchange-token';

export type AuthState = {
	athlete: SummaryAthlete | null;
	status: 'idle' | 'loading' | 'resovled' | { error: string };
	scopes: AccessRequestScope[];
};

const initialAuthState: AuthState = {
	athlete: null,
	status: 'idle',
	scopes: [],
};

@Injectable()
export class AuthStore {
	readonly #exchangeToken = inject(ExchangeTokenService);

	// State
	readonly #state = signal<AuthState>(initialAuthState);

	// Events
	readonly #loggedOut = new Subject<void>();
	readonly #authorizationCodeAdded = new Subject<string>();
	readonly #scopesLoaded = new Subject<AccessRequestScope[]>();

	// Selectors
	readonly isAuth = computed(() => !!this.#state().athlete);
	readonly isLoading = computed(() => this.#state().status === 'loading');
	readonly hasError = computed(() => this.#state().status instanceof Object);
	readonly currentUser = computed(() => this.#state().athlete);
	readonly authorizedScopes = computed(() => this.#state().scopes);

	constructor() {
		// Reducers
		this.#loggedOut.pipe(takeUntilDestroyed()).subscribe(() => {
			this.#state.set(initialAuthState);
		});
		this.#authorizationCodeAdded
			.pipe(
				tap(() => this.#state.update((state) => ({ ...state, status: 'loading' }))),
				switchMap((code: string) => this.#exchangeToken.exchange$(code).pipe(first())),
				catchError((error) => {
					this.#state.set({
						...initialAuthState,
						status: { error: error },
					});
					return EMPTY;
				}),
				filter((response: TokenExchangeResponse) => !!response),
				takeUntilDestroyed(),
			)
			.subscribe((response: TokenExchangeResponse) => {
				this.#state.update((state) => ({
					...state,
					athlete: response.athlete,
					status: 'resovled',
				}));
			});

		this.#scopesLoaded.pipe(takeUntilDestroyed()).subscribe((scopes: AccessRequestScope[]) => {
			this.#state.update((state) => ({ ...state, scopes }));
		});
	}

	// Actions
	login(authorizationCode: string) {
		this.#authorizationCodeAdded.next(authorizationCode);
	}
	loggout() {
		this.#loggedOut.next();
	}
	setScopes(scopes: AccessRequestScope[]) {
		this.#scopesLoaded.next(scopes);
	}
}
