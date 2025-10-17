import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StravaConfigService } from './strava';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [RouterOutlet],
})
export class App {
	protected readonly title = signal('doyep-analyzer');
	protected readonly clientId = inject(StravaConfigService).get('clientId')
 }
