import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Order } from '../list-pizzas/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  user_profile:any;
  orders:Order[];
  API_URL: string = "http://localhost:3001/";
  constructor(public auth:AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.getProfileInformation();
    this.getMyOrders();
  }

  getMyOrders(){
    //user email is nedeed...
    let headers = new HttpHeaders().set('Authorization', 'Bearer ${this.auth.accessToken}')
    let params = new HttpParams().set("user_email",this.user_profile.email); //Create new HttpParams

    this.http.get<Order[]>(this.API_URL+'myOrders', {headers: headers, params: params})
      .subscribe(data=>{
          console.log('receiving My Orders list!');
          this.orders = data;
        },
        err=>{
          console.log('error receiving My Orders list!');
          console.log(err);
        }
    ); 
    
  }

  getProfileInformation():void{
    if (this.auth.userProfile) {
      this.user_profile = this.auth.userProfile; 
       console.log(this.auth.userProfile);
     }
  }
}
