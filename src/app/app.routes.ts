import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./clients/clients-list/clients-list.component').then(
        (m) => m.ClientsListComponent
      ),
  },
  {
    path: 'clients/:id',
    loadComponent: () =>
      import('./clients/client-detail/client-detail.component').then(
        (m) => m.ClientDetailComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
