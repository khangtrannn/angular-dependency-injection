import { Injectable } from "@angular/core";
import { Logger } from "../logger";

@Injectable({
  providedIn: 'root',
})
export class GallerySlideLoggerService implements Logger {
  prefix = 'Gallery Slide';

  log(msg: string): void {
    console.log(`${this.prefix}: ${msg} (from slide)`);
  }
}