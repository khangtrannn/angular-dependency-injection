import { NgModule } from '@angular/core';
import { HostModifierModule } from './host-modifier/host-modifier.module';

@NgModule({
  imports: [HostModifierModule],
  exports: [HostModifierModule],
})
export class ResolutionModifiersModule {}
