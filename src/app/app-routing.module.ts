import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'for-root-for-child',
    loadChildren: () => import('./for-root-for-child/for-root-for-child.routes').then((r) => r.ForRootForChildRoutes),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
