import { Injectable } from '@angular/core';
import {Logger} from '../logger';

@Injectable({
  providedIn: 'root',
})
export class GalleryLoggerService implements Logger {
  prefix = 'Gallery Log';

  log(msg: string): void {
    console.log(`${this.prefix}: ${msg}`);
  }
}