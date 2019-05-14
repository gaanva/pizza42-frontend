import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PizzaModel } from '../PizzaModel';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  API_URL = 'http://localhost:3001';
  pizzas: PizzaModel[];
  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.getAllPizzas();
  }

  public adminCreatePizza(name, description, price): void {
    let pizza:PizzaModel = new PizzaModel(name, description, price);
    this.http
      .post<PizzaModel>(`${this.API_URL}/pizza`, {pizza}, {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.auth.accessToken}`)
      })
      .subscribe(
        data => {console.log(data);
                alert('pizza created sucessfully!');
                this.getAllPizzas();
                this.pizzas = []},
        error => {
            console.log(error);
            alert('Error creating new pizza.');
        }
      );
      
  }

  getAllPizzas(){
    return this.http.get<PizzaModel[]>(this.API_URL, {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ${this.auth.accessToken}')
    }).subscribe(data=>{
      console.log('receiving pizza list!');
      this.pizzas = data;
    },
    err=>{
      console.log('error receiving pizza list!');
      console.log(err);});
  }

}