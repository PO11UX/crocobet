import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

export const routes: Routes = [
    {
        path: 'slots',
        loadComponent: () => import('./pages/slots-page/slots-page.component').then(m => m.SlotsPageComponent)
    },
    {
        path: 'not-found',
        loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    },
    { path: '', redirectTo: 'slots', pathMatch: 'full' },
    { path: '**',redirectTo: 'not-found', pathMatch: 'full' },
]