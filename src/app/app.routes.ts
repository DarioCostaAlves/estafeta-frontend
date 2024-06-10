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
    path: 'create-client',
    loadComponent: () =>
      import('./clients/create-client/create-client.component').then(
        (m) => m.CreateClientComponent
      ),
  },
  {
    path: 'stores',
    loadComponent: () =>
      import('./stores/stores-list/stores-list.component').then(
        (m) => m.StoresListComponent
      ),
  },
  {
    path: 'warehouses',
    loadComponent: () =>
      import('./warehouses/warehouses-list/warehouses-list.component').then(
        (m) => m.WarehousesListComponent
      ),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/order-list/order-list.component').then(
        (m) => m.OrderListComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
