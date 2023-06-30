import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyProvidersModule } from './dependency-providers/dependency-providers.module';
import { HostResolutionModifierModule } from './host-resolution-modifier/host-resolution-modifier.module';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HostResolutionModifierModule,
    DependencyProvidersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Self() private logger: LoggerService) {
    this.logger.log('constructor init');
  }
}
