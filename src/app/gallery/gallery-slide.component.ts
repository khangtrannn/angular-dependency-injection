import { Component, OnInit } from "@angular/core";
import { GalleryLoggerService } from "./gallery-logger.service";

@Component({
  selector: 'app-gallery-slide',
  template: `<p>I am a slide</p>`,
  standalone: true,
})
export class GallerySlideComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Slide Initialzation');
  }
}