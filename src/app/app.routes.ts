import { Routes } from '@angular/router';
import { SlotsFacade } from './pages/slots-page/services/slots.facade';
import { SlotsService } from './pages/slots-page/services/slots.service';
import { SlotsStore } from './pages/slots-page/store/slots.store';

export const routes: Routes = [
  {
    path: 'slots',
    loadComponent: () =>
      import('./pages/slots-page/slots-page.component').then(
        (m) => m.SlotsPageComponent
      ),
    providers: [SlotsService, SlotsFacade, SlotsStore],
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
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
