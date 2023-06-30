import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyProvidersModule } from './dependency-providers/dependency-providers.module';
import { LoggerService } from './logger.service';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ResolutionModifiersModule,
    DependencyProvidersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Self() private logger: LoggerService) {
    this.logger.log('constructor init');
  }
}
