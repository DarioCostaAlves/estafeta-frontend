import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'clients',
    loadComponent: () => import('./clients/clients-list/clients-list.component').then((m) => m.ClientsListComponent),
  },
  {
    path: 'client-detail',
    loadComponent: () => import('./clients/client-detail/client-detail.component').then((m) => m.ClientDetailComponent),
  
  },
  {
    path: 'stores',
    loadComponent: () => import('./stores/stores-list/stores-list.component').then((m) => m.StoresListComponent),
  },  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  
];

