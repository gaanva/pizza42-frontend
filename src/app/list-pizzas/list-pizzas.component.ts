import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PizzaModel } from '../PizzaModel';
import { PizzaOrderService } from '../pizza-order.service';
import { AuthService } from '../auth/auth.service';
import { OrderDetails } from './order-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
@Component({
  selector: 'app-list-pizzas',
  templateUrl: './list-pizzas.component.html',
  styleUrls: ['./list-pizzas.component.css']
})
export class ListPizzasComponent implements OnInit {
  user_profile:any;
  pizzas: PizzaModel[];
  order_in_progress : Object[];
  orders: Object[];
  API_URL: string = "http://localhost:3001/";
  constructor(private pizzaOrderService: PizzaOrderService, public auth:AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getProfileInformation();
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
    if(this.user_profile.email_veirified === true){
      let order_details:OrderDetails[] = new Array(
                                            new OrderDetails('Bacalao Super Pizza',12,2),
                                            new OrderDetails('Peperoni Super Pizza',11,4));
      let order:Order = new Order(new Date(), this.user_profile.email, order_details);
      console.log('order created:');
      console.log(order);

      this.http
      .post<Order>(`${this.API_URL}/order`, {order}, {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.auth.accessToken}`)
      })
      .subscribe(
        data => {
          console.log(data);
          alert('Order created sucessfully!');
          },
        error => {
          alert('Error creating new pizza42 Order.');  
          console.log(error);
            
          }
      );
      //Send this mock to the API create order service.
      //check first it the email is verified.
    }else{
      alert("Sorry!. You need to verify your email to create the Pizza42 order.")
    }
  }

  getAllPizzasOrders():void{
    this.pizzaOrderService.getPizzaOrders().subscribe(data=>{
      this.orders = data;
    });
  }

  getProfileInformation():void{
    if (this.auth.userProfile) {
      this.user_profile = this.auth.userProfile; 
       console.log(this.auth.userProfile);
     }
  }
  addToOrder(pizza):void{
    this.order_in_progress.push(pizza);
  }

}
