import { NgModule } from '@angular/core';
import { BrowserReporter } from './browser-reporter.service';
import { EngagingReporter } from './engaging-reporter.service';
import { ReporterComponent } from './reporter.component';
import { REPORTERS } from './reporter.token';

@NgModule({
  declarations: [ReporterComponent],
  exports: [ReporterComponent],
  providers: [
    /**
     * Without multi: true, the last configuration will be applied. Otherwise, if multi: true, we will receive an array
     * of configurations
     */
    {
      provide: REPORTERS,
      useExisting: BrowserReporter,
      multi: true,
    },
    {
      provide: REPORTERS,
      useExisting: EngagingReporter,
      multi: true,
    },
  ],
})
export class MultiProvidersModule {}
