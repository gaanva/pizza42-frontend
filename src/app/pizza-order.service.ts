import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PizzaModel } from './PizzaModel';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class PizzaOrderService {

  constructor(public auth: AuthService, private http: HttpClient) { }

  API_URL: string = "http://localhost:3001/";

  getAllPizzas(){
    return this.http.get<PizzaModel[]>(this.API_URL, {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ${this.auth.accessToken}')
    });
  
    
    //return this.http.get<PizzaModel[]>(this.API_URL);
  }

  postPizzasOrder(order:object){
    return this.http.post(this.API_URL + 'order', order);
  }

  getPizzaOrders(){
    return this.http.get<Object[]>(this.API_URL + 'orders');
  }

}
