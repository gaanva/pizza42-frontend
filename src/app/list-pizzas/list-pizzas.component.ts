import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PizzaModel } from '../PizzaModel';
import { PizzaOrderService } from '../pizza-order.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-list-pizzas',
  templateUrl: './list-pizzas.component.html',
  styleUrls: ['./list-pizzas.component.css']
})
export class ListPizzasComponent implements OnInit {

  pizzas: PizzaModel[];
  order_in_progress : Object[];
  orders: Object[];
  
  constructor(private pizzaOrderService: PizzaOrderService, public auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.getAllPizzas();
  }

  getAllPizzas(): void {
    this.pizzaOrderService.getAllPizzas().subscribe(data=>{
      console.log('receiving pizza list!');
      this.pizzas = data;
    },
    err=>{
      console.log('error receiving pizza list!');
      console.log(err);});
  };

  postPizzasOrder():void{
    this.pizzaOrderService.postPizzasOrder(this.order_in_progress).subscribe(data=>{
      console.log(data);
      this.order_in_progress=[];
      this.getAllPizzas();
      this.getAllPizzasOrders();
    });
  }

  getAllPizzasOrders():void{
    this.pizzaOrderService.getPizzaOrders().subscribe(data=>{
      this.orders = data;
    });
  }

  addToOrder(pizza):void{
    this.order_in_progress.push(pizza);
  }

}