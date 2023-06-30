import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { LegacyLogger } from './logger.legacy';

@Component({
  selector: 'app-use-value',
  template: `
    <h3>Use value</h3>
    - provide: LoggerService, useValue: LegacyLogger
  `,
  styleUrls: [],
  providers: [{ provide: LoggerService, useValue: LegacyLogger }],
})
export class UseValueComponent {
  constructor(private logger: LoggerService) {
    this.logger.prefix = 'Use Value Component';
    this.logger.log('UseValueComponent init...');
  }
}
