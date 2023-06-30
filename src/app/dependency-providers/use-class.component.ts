import { Component } from '@angular/core';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-use-class',
  template: `
    <h3>Dependency providers</h3>
    - provide: LoggerService, useClass: ExperimentalLoggerService
  `,
  styleUrls: [],
  providers: [{ provide: LoggerService, useClass: ExperimentalLoggerService }],
})
export class UseClassComponent {
  constructor(
    private logger: LoggerService,
    private experimentalLogger: ExperimentalLoggerService
  ) {
    this.logger.prefix = 'Use Class Component';
    this.logger.log('UseClassComponent init...');

    console.log(
      'Is instance the same `logger` and `experimentLogger`: ',
      this.logger === this.experimentalLogger
    );
  }
}
