import { Logger } from '../logger';

export const LegacyLogger: Logger = {
  prefix: 'legacy root',
  log(message: string): void {
    console.log('🚀 (Legacy) ' + `${this.prefix}: ${message}`);
  },
};
