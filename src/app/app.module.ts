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

@NgModule({
  declarations: [
    AppComponent,
    ListPizzasComponent,
    CallbackComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PizzaOrderService, AuthService, AuthGuardService, ScopeGuardService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
