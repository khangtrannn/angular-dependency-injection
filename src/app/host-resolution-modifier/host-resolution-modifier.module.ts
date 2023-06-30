import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';

@NgModule({
  declarations: [ParentDirective, ChildDirective],
  imports: [
    CommonModule
  ],
  exports: [ParentDirective, ChildDirective]
})
export class HostResolutionModifierModule { }
