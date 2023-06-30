import { Component } from '@angular/core';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-use-existing',
  template: `
    <h3>Use Existing</h3>
    - provide: LoggerService, useExisting: ExperimentalLoggerService
  `,
  styleUrls: [],
  providers: [
    /**
     * useExisting tells Angular to not create new instance for service but grab instantiated one
     * so in our case it would be taken the experimental logger service which already exists in the root ModuleInjector
     */
    { provide: LoggerService, useExisting: ExperimentalLoggerService },
  ],
})
export class UseExistingComponent {
  constructor(
    private logger: LoggerService,
    private experimentalLogger: ExperimentalLoggerService
  ) {
    this.logger.prefix = 'Use Existing Component';
    this.logger.log('UseExistingComponent init...');

    console.log(
      'Is instance the same `logger` and `experimentLogger`: ',
      this.logger === this.experimentalLogger
    );
  }
}
