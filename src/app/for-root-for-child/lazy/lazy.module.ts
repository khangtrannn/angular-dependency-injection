import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PollingModule } from "polling";
import { LazyRoutingModule } from "./lazy-routing.module";
import { LazyComponent } from "./lazy.component";

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, PollingModule.forChild({
    interval: 3000,
  })]
})
export class LazyModule {}