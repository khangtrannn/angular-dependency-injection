import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../config.token';

@Component({
  selector: 'app-injection-token',
  template: ` <h3>Injection token</h3> `,
})
export class InjectionTokenComponent {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log('InjectionTokenComponent -> constructor -> config', config);
  }
}
