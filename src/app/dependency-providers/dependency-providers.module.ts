import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UseClassComponent } from './use-class.component';

@NgModule({
  declarations: [UseClassComponent],
  imports: [CommonModule],
  exports: [UseClassComponent],
})
export class DependencyProvidersModule {}
