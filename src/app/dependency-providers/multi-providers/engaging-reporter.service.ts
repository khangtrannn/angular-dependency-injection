import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class EngagingReporter implements Reporter {
  report(): void {
    console.log('Engaging report: User has ben using app X seconds');
  }
}
