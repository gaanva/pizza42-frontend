import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzasComponent } from './list-pizzas/list-pizzas.component';
import { CallbackComponent } from './callback/callback.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';

const routes: Routes = [
  { path: '', component: ListPizzasComponent, pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['create:pizza']} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
