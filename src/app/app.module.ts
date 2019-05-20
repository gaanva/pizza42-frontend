import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PizzaOrderService } from './pizza-order.service';
import { ListPizzasComponent } from './list-pizzas/list-pizzas.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from './auth/auth-guard.service';
import { ScopeGuardService } from './auth/scope-guard.service';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { UserListReportComponent } from './user-list-report/user-list-report.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ModalUpdatePizzaComponent } from './modal-update-pizza/modal-update-pizza.component';
import { ModalOrderComponent } from './modal-order/modal-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPizzasComponent,
    CallbackComponent,
    ProfileComponent,
    AdminComponent,
    CustomerOrdersComponent,
    UserListReportComponent,
    MyOrdersComponent,
    ModalUpdatePizzaComponent,
    ModalOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [PizzaOrderService, AuthService, AuthGuardService, ScopeGuardService,],
  bootstrap: [AppComponent],
  entryComponents: [ModalUpdatePizzaComponent, ModalOrderComponent]
})
export class AppModule { }
