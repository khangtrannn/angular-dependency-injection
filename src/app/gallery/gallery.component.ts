import { Component, inject, OnInit } from "@angular/core";
import { GalleryLoggerService } from "./gallery-logger.service";
import { GallerySlideComponent } from "./gallery-slide.component";

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-wrap">
      <h1 class="gallery-wrap__title">Gallery Library</h1>
      <div class="gallery-content">
        <!-- <app-gallery-slide></app-gallery-slide>
        <app-gallery-slide></app-gallery-slide> -->

        <!-- Making it more generic -->
        <ng-content></ng-content>
      </div>
    </div>
  `,
  imports: [GallerySlideComponent],
  // providers: [GalleryLoggerService],
  // viewProviders is only available to current view not <ng-content></ng-content>
  viewProviders: [GalleryLoggerService],
  standalone: true,
})
export class GalleryComponent implements OnInit {
  logger = inject(GalleryLoggerService);

  ngOnInit(): void {
    this.logger.log('Gallery Initialization');
  }
}