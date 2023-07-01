import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporter implements Reporter {
  report(): void {
    console.log(`
      Browser report:
        Browser width - ${window.innerWidth},
        Browser height - ${window.innerHeight}
    `);
  }
}
