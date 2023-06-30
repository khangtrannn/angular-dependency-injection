import { Component } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../config.token';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-use-factory',
  template: ` <h3>Use Factory</h3> `,
  styleUrls: [],
  providers: [
    {
      provide: LoggerService,
      /**
       * If we use useValue here instead of useFactory, instead of instance of the service we get just a
       * function as it is (function declaration) while useFactory calls this function and uses their return (real object)
       * as a value for the token.
       * So we can say that use value has a static nature when use factory has dynamic one
       */
      useFactory: (config: AppConfig) => {
        return config.experimentalEnabled
          ? new ExperimentalLoggerService()
          : new LoggerService();
      },
      deps: [APP_CONFIG],
    },
  ],
})
export class UseFactoryComponent {
  constructor(private logger: LoggerService) {
    console.log('What is logger', logger);

    this.logger.prefix = 'Use Factory Component';
    this.logger.log('UseFactoryComponent init...');
  }
}
