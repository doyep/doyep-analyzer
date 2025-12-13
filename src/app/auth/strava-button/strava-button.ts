import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { STRAVA_OAUTH2_URL } from 'ngx-strava-client';

@Component({
  selector: 'app-strava-button',
  template: `
    <a [href]="authUrl"><img src="assets/logos/connect_with_strava.svg" alt="strava button" /></a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StravaButton {
  readonly authUrl = inject(STRAVA_OAUTH2_URL);
}
