import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, firstValueFrom, of, tap } from 'rxjs';
import { AppConfig } from './config';

export class ConfigService {
	readonly #http = inject(HttpClient);
	#config?: AppConfig;

	async load(): Promise<void> {
		const config$ = this.#http.get<any>('/assets/config.json').pipe(
			tap((config) => (this.#config = config)),
			catchError((error) => {
				console.error('[ConfigService] Error loading configuration : ', error);
				return of(void 0);
			}),
		);
		await firstValueFrom(config$);
	}

	get(key: keyof AppConfig) {
		if (!this.#config) throw new Error('ConfigService not initialized');
		return this.#config?.[key];
	}
}
