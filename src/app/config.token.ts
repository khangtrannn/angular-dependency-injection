import { InjectionToken } from '@angular/core';

export interface AppConfig {
  globalValue: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  // Tree-shakable way
  providedIn: 'root',
  factory: () => ({
    globalValue: 'some global value',
  }),
});
