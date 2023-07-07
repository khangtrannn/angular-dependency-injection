import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PollingService } from "polling";

@Component({
  selector: 'app-hero',
  template: `<p>Polling count times: {{ polling.pollings$ | async }}</p>`,
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent {
  constructor(public polling: PollingService) {}
}