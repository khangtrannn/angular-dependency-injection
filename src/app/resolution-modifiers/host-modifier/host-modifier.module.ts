import { NgModule } from '@angular/core';
import { ChildDirective } from './child.directive';
import { ParentDirective } from './parent.directive';

@NgModule({
  declarations: [ChildDirective, ParentDirective],
  exports: [ChildDirective, ParentDirective],
})
export class HostModifierModule {}
