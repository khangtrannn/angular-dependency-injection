import { Component, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'angular-dependency-injection';

  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService,
  ) {
    this.logger.prefix = 'App Component';
    this.logger.log('AppComponent init...');

    this.parentLogger.log('constructor init');
  }
}
