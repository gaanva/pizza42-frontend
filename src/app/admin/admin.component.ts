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

  API_URL = 'http://localhost:3001/api';
  
  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  public adminCreatePizza(name, description, price): void {
    let pizza:PizzaModel = new PizzaModel(name, description, price);
    this.http
      .post<PizzaModel>(`${this.API_URL}/pizza`, pizza, {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.auth.accessToken}`)
      })
      .subscribe(
        data => console.log("pizza successfully created"),
        error => {
            console.log(error);
            alert('Error creating new pizza.');
        }
      );
  }
}
