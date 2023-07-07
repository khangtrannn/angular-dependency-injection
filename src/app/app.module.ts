import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyProvidersModule } from './dependency-providers/dependency-providers.module';
import { LoggerService } from './logger.service';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerySlideComponent } from './gallery/gallery-slide.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ResolutionModifiersModule,
    DependencyProvidersModule,
    GalleryComponent,
    GallerySlideComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Self() private logger: LoggerService) {
    this.logger.log('constructor init');
  }
}
