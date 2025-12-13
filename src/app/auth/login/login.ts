import { Component, inject } from '@angular/core';
import { STRAVA_OAUTH2_URL } from 'ngx-strava-client';

@Component({
  selector: 'app-login',
  template: `
    <main class="flex flex-col min-h-dvh justify-center items-center gap-8">
      <hgroup class="font-azonix w-60 text-3xl ">
        <h1 class="first-letter:text-5xl first-letter:text-[#c4a303]">Doyep</h1>
        <h1 class="first-letter:text-5xl first-letter:text-[#c4a303] text-right">Analyzer</h1>
      </hgroup>
      <img class="w-60" src="assets/logos/running_brain.png" alt="brain running" />
      <a [href]="authUrl"><img src="assets/logos/connect_with_strava.svg" /></a>
    </main>
  `,
})
export class Login {
  readonly authUrl = inject(STRAVA_OAUTH2_URL);
}
