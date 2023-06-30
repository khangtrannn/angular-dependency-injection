import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UseClassComponent } from './use-class.component';
import { UseExistingComponent } from './use-existing.component';
import { UseValueComponent } from './use-value.component';

@NgModule({
  declarations: [UseClassComponent, UseExistingComponent, UseValueComponent],
  imports: [CommonModule],
  exports: [UseClassComponent, UseExistingComponent, UseValueComponent],
})
export class DependencyProvidersModule {}
