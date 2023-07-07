import { Routes } from "@angular/router";

export const ForRootForChildRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./for-root-for-child.component').then((c) => c.ForRootForChildComponent),
    children: [
      {
        path: 'hero',
        loadComponent: () => import('./hero/hero.component').then((c) => c.HeroComponent),
      },
      {
        path: 'lazy',
        loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
      }
    ]
  },
]