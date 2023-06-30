import { Component } from '@angular/core';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-dependency-providers',
  template: `
    <h3>Dependency providers</h3> 
    -  provide: LoggerService, useClass: ExperimentalLoggerService
  `,
  styleUrls: [],
  providers: [
    { provide: LoggerService, useClass: ExperimentalLoggerService }
  ]
})
export class DependencyProvidersComponent {
  constructor(
    private logger: LoggerService, 
    private experimentalLogger: ExperimentalLoggerService,
  ) {
    this.logger.prefix = 'Dependency Providers Components';
    this.logger.log('DependencyProvidersComponent init...');

    console.log('Is instance the same `logger` and `experimentLogger`: ', this.logger === this.experimentalLogger);
  }
}
