import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-for-root-for-child',
  template: `
    <div style="margin-top: 1rem;">
      <a style="margin-right: 2rem;" routerLink="hero">Hero Component</a>
      <a routerLink="lazy">Lazy Component</a>
    </div>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class ForRootForChildComponent {}