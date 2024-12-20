import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@drinkflyer/home').then((m) => m.HomeComponent),
  },
];
