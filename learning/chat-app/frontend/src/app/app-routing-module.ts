import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './login/login';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  // Placeholders until those screens exist
  { path: 'register', redirectTo: 'login', pathMatch: 'full' },
  { path: 'forgot-password', redirectTo: 'login', pathMatch: 'full' },
  { path: 'privacy', redirectTo: 'login', pathMatch: 'full' },
  { path: 'terms', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
