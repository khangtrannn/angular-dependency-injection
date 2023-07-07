import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { shareReplay, timer } from 'rxjs';

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  public pollings$ = timer(0, 1000).pipe(shareReplay());
  constructor(@Optional() @Inject(INTERVAL) private internal: number) {}
}
