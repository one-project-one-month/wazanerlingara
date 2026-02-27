import { Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'edit',
    loadComponent: () => import('./components/profile-edit/profile-edit.component').then(m => m.ProfileEditComponent)
  }
];
