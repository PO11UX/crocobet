import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'slots',
    loadComponent: () =>
      import('./pages/slots-page/slots-page.component').then(
        (m) => m.SlotsPageComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./shared/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
  {
    path: 'sport',
    loadComponent: () =>
      import('./pages/sport-page/sport-page.component').then(
        (m) => m.SportPageComponent
      ),
  },
  {
    path: 'live',
    loadComponent: () =>
      import('./pages/live-page/live-page.component').then(
        (m) => m.LivePageComponent
      ),
  },
  {
    path: 'casino',
    loadComponent: () =>
      import('./pages/casino-page/casino-page.component').then(
        (m) => m.CasinoPageComponent
      ),
  },
  { path: '', redirectTo: 'slots', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
