import { Component, Inject, OnInit } from '@angular/core';
import { Reporter } from './reporter';
import { REPORTERS } from './reporter.token';

@Component({
  selector: 'app-reporter',
  template: `<h3>Reporter demonstrates multiple providers use case</h3>`,
  providers: [
    // --- Configure differently on component level ---
    // {
    //   provide: REPORTERS,
    //   useExisting: EngagingReporter,
    //   multi: true,
    // }
  ],
})
export class ReporterComponent implements OnInit {
  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  ngOnInit(): void {
    this.reporters.forEach((report) => report.report());
  }
}
