import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzasComponent } from './list-pizzas/list-pizzas.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: '', component: ListPizzasComponent, pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
