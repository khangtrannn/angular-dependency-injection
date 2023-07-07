import { PollingService } from 'polling';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <p>Polling count times (lazy): {{ polling.pollings$ | async }}</p>
  `,
})
export class LazyComponent {
  constructor(public polling: PollingService) {}
}