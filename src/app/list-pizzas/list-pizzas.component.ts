import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PizzaModel } from '../PizzaModel';
import { PizzaOrderService } from '../pizza-order.service';
import { AuthService } from '../auth/auth.service';
import { OrderDetails } from './order-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
import { ModalOrderComponent } from '../modal-order/modal-order.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-pizzas',
  templateUrl: './list-pizzas.component.html',
  styleUrls: ['./list-pizzas.component.css']
})
export class ListPizzasComponent implements OnInit {
  userProfile:any;
  pizzas: PizzaModel[];
  order_details:OrderDetails[] = [];
  
  order: Order;
  API_URL: string = "http://localhost:3001/";
  constructor(
    private pizzaOrderService: PizzaOrderService, 
    public auth:AuthService, 
    private router: Router, 
    private http: HttpClient,
    private modalService: NgbModal) { }

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
    if(this.userProfile.email_verified === true){
    /*  let order_details:OrderDetails[] = new Array(
                                            new OrderDetails('Bacalao Super Pizza',12,2),
                                            new OrderDetails('Peperoni Super Pizza',11,4));
      let order:Order = new Order(new Date(), this.userProfile.email, order_details);
      console.log('order created:');
      console.log(order);
    */
    let order = this.order;
      this.http
      .post<Order>(`${this.API_URL}order`, {order}, {
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
      alert("Sorry!. You need to verify your email account!")
    }
  }

  /*getAllPizzasOrders():void{
    this.pizzaOrderService.getPizzaOrders().subscribe(data=>{
      this.orders = data;
    });
  }*/

  getProfileInformation():void{
    //requesting user profile information
    if(this.auth.accessToken !== ''){
      this.auth.getProfile((err, profile) => {
        console.log(profile);
        this.userProfile = profile;
      });
    }
  }
  addToOrder(pos):void{
    let pizza:PizzaModel  = this.pizzas[pos];
    this.order_details.push(new OrderDetails(pizza.pizza, pizza.price, 1));
    alert('pizza added to the order!');
    console.log(this.order_details);
  }

  createPreOrder():boolean{
    if(this.order_details.length !== 0){
      this.order = new Order(new Date(), this.userProfile.email, this.order_details);
      return true;
    }else{
      alert("For Create your order first Add Pizzas to your order!");
      return false;
    }
  }

  openModal() {
    
    if(this.createPreOrder()){
      console.log(this.order);  
      const modalRef = this.modalService.open(ModalOrderComponent);
      modalRef.componentInstance.order = this.order;
      modalRef.componentInstance.passEntry.subscribe((receivedOrder) => {
        this.order = receivedOrder;
        //send the request to the server.
        this.createOrder();
      });
    }
  }
}
