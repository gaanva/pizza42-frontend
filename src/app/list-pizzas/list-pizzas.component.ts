import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PizzaModel } from '../PizzaModel';
import { PizzaOrderService } from '../pizza-order.service';
import { AuthService } from '../auth/auth.service';
import { OrderDetails } from './order-details';
import { Order } from './order';
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

  createOrder():void{
    //ORDER Mock test object
    let order_details:OrderDetails[] = new Array(
                                          new OrderDetails('Bacalao Super Pizza',12,2),
                                          new OrderDetails('Peperoni Super Pizza',11,4));
    let order:Order = new Order(new Date(), 'user@email.com', order_details);
    
    //Send this mock to the API create order service.
    //check first it the email is verified.
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
