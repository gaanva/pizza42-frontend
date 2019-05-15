import { Component, OnInit } from '@angular/core';
import { Order } from '../list-pizzas/order';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  orders:Order[];
  API_URL: string = "http://localhost:3001/";

  constructor(public auth:AuthService, private http: HttpClient) { }
  
  ngOnInit() {

  }

  getCustomerOrders(){
    //user email is nedeed...
    let headers = new HttpHeaders().set('Authorization', 'Bearer ${this.auth.accessToken}')
    
    this.http.get<Order[]>(this.API_URL+'orders', {headers: headers})
      .subscribe(data=>{
          console.log('receiving the orders list!');
          this.orders = data;
        },
        err=>{
          console.log('error receiving the orders list!');
          console.log(err);
        }
    ); 
  }
  
}
