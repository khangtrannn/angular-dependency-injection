import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InjectionTokenComponent } from './injection-token.component';
import { UseClassComponent } from './use-class.component';
import { UseExistingComponent } from './use-existing.component';
import { UseFactoryComponent } from './use-factory.component';
import { UseValueComponent } from './use-value.component';

const declarations = [
  UseClassComponent,
  UseExistingComponent,
  UseValueComponent,
  InjectionTokenComponent,
  UseFactoryComponent,
];

@NgModule({
  declarations: [declarations],
  imports: [CommonModule],
  exports: [declarations],
})
export class DependencyProvidersModule {}
