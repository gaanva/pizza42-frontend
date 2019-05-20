import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PizzaModel } from '../PizzaModel';
import {AuthService} from '../auth/auth.service';
import { ModalUpdatePizzaComponent } from '../modal-update-pizza/modal-update-pizza.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  API_URL = 'http://localhost:3001';
  pizzas: PizzaModel[];
  public isCollapsed = true;
  constructor(public auth: AuthService, private http: HttpClient, private modalService: NgbModal) { }

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
                this.isCollapsed = true;
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

  remove(pos: number) {
    //this.awaitingPersonList.push(this.personList[id]);
    //call to remove service!
    if(confirm("Are you sure you want to delete "+this.pizzas[pos].pizza+ "?")) {
      if(this.pizzas[pos].id!=0){
        console.log(this.pizzas[pos]);
        const options = {
          headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`),
          body: {
            id: this.pizzas[pos].id
          }
        }

        this.http
        .delete(`${this.API_URL}/pizza`, options)
          .subscribe(
          data => {
              console.log(data);
              this.pizzas.splice(pos, 1);
            },
          error => {
              console.log(error);
              alert('Error deleting pizza.');
          });
      }else{
        this.pizzas.splice(pos, 1);
      }
    }
    
  }

  //update pizza.
  update(pizza:PizzaModel) {
    this.http.put<PizzaModel>(`${this.API_URL}/pizza`, pizza, {
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${this.auth.accessToken}`)
    }).subscribe(
      data => {console.log(data);
              alert('pizza updated sucessfully!');
              },
      error => {
          console.log(error);
          alert('Error updating pizza... please try again!');
          this.getAllPizzas();
      }
    ); 
  }
  /*
  update(pos: number) {
    if(this.ctrlPizzaCompleted(this.pizzas[pos])){
      //call to the server and add the new pizza or update the new pizza
      console.log(this.pizzas[pos]);
      if(this.pizzas[pos].id!=0){
        //update the pizza
        this.http.put<PizzaModel>(`${this.API_URL}/pizza`, this.pizzas[pos], {
          headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.auth.accessToken}`)
        }).subscribe(
          data => {console.log(data);
                  alert('pizza updated sucessfully!');
                  },
          error => {
              console.log(error);
              alert('Error updating pizza.');
              this.getAllPizzas();
          }
        );
      }
    }else{
      alert('Please complete all the fields!');
    }
  }
  */
  ctrlPizzaCompleted(pizza:PizzaModel){
    if(pizza.description !=='' && pizza.pizza !=='' && pizza.price!==0){
      return true;
    }else{
      return false;
    }
  }

  openModal(pos:number) {
    const modalRef = this.modalService.open(ModalUpdatePizzaComponent);
    modalRef.componentInstance.pizza = this.pizzas[pos];

    modalRef.componentInstance.passEntry.subscribe((receivedPizzaUpdated) => {
      this.update(receivedPizzaUpdated);
    });
  }

}