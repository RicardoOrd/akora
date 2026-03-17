import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  // Fase 2: Auth
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  // },
  // Fase 3: Cart & Checkout
  // {
  //   path: 'cart',
  //   loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: 'checkout',
  //   loadComponent: () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent),
  //   canActivate: [authGuard],
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
