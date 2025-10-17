import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of, tap } from 'rxjs';

export class StravaConfigService {
	readonly #http = inject(HttpClient);
	#config?: any;

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

	get(key: keyof any) {
		if (!this.#config) throw new Error('ConfigService not initialized');
		return this.#config?.[key];
	}
}
