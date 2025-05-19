import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userData = localStorage.getItem('user');

  if (!userData) {
    router.navigate(['/dashboard']);
    return false;
  }

  const user = JSON.parse(userData);
  const path = state.url;

  const roleRouteMap: { [key: string]: string } = {
    carrefour: '/sales-manager-carrefour',
    geant: '/sales-manager-geant',
    mg: '/sales-manager-mg',
    traveltodo: '/sales-manager-traveltodo',
    touring: '/sales-manager-touring',
    tunisiebooking: '/sales-manager-tunisiebooking'
  };

  const expectedPath = roleRouteMap[user.role];

  if (expectedPath === path) {
    return true;
  } else {
    router.navigate(['/dashboard']);
    return false;
  }
};