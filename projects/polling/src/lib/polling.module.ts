import { ModuleWithProviders, NgModule } from '@angular/core';
import { config } from 'rxjs';
import { PollingComponent } from './polling.component';
import { INTERVAL, PollingConfig, PollingService } from './polling.service';

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
  /**
   * Provide PollingService this way will lead to each module has imported this PollingModule end up with
   * different PollingService instance. This is the reason why forRoot & forChild comes in play
   */
  // providers: [PollingService],
})
export class PollingModule {
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
      ]
    }
  }

  static forChild(config?: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 2000,
        }
      ]
    }
  }

  static withConfig(config?: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 1000,
        }
      ]
    }
  }
}
