import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzasComponent } from './list-pizzas/list-pizzas.component';
import { CallbackComponent } from './callback/callback.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { UserListReportComponent } from './user-list-report/user-list-report.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
    
const routes: Routes = [
  { path: '', component: ListPizzasComponent, pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['create:pizza']} },
  { path: 'orders', component: CustomerOrdersComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['read:orders']} },
  { path: 'userListReport', component: UserListReportComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['read:users']} },
  { path: 'userOrders', component: MyOrdersComponent, canActivate: [AuthGuard], data: { expectedScopes: ['read:myOrders']}},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
