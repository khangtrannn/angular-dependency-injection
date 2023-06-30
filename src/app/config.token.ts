import { InjectionToken } from '@angular/core';

export interface AppConfig {
  globalValue: string;
}

/**
 * Just few words about injection token and why do we need it
 *
 * class Injector {
 *  private _container = new Map();
 * }
 *
 * Here we had a map where the key was a class reference and the value is instance.
 * Because we inject not a class, we cannot use class reference as a key but we need some key anyway
 * otherwise Angular cannot understand how to resolve it.
 * Interface also will not work because interfaces are not existing at hte runtime. And this is where
 * injection token can help us and the value of injection token will act as a key in this case.
 */
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  // Tree-shakable way
  providedIn: 'root',
  factory: () => ({
    globalValue: 'some global value',
  }),
});
