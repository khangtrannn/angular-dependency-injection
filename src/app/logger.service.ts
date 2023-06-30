import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
  // --- Everywhere in the application will be used implementation of this new service if we
  // don't override it somewhere in child injector ---
  // --- Enable tree-shakable services ---
  // useClass: ExperimentalLoggerService,
  // useExisting: ExperimentalLoggerService,
})
export class LoggerService implements Logger {
  prefix = 'root';

  constructor() {}

  log(message: string): void {
    console.log('🚀 ' + `${this.prefix}: ${message}`);
  }
}
