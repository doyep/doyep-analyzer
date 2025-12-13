import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  template: `
    <p>exchange-token works!</p>
    @if (accessDenied()) {
      ACCESS DENIED
    } @else {
      <pre>{{ queryParam() | json }}</pre>
    }
  `,
  imports: [JsonPipe],
})
export class ExchangeToken {
  readonly route = inject(ActivatedRoute);
  readonly queryParam = toSignal(this.route.queryParamMap);

  readonly accessDenied = computed(() => this.queryParam()?.get('error') === 'access_denied');
}
