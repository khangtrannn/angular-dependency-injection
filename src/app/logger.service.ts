import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  prefix = 'root';

  constructor() {}

  log(message: string): void {
    console.log('🚀 ' + `${this.prefix}: ${message}`);
  }
}
