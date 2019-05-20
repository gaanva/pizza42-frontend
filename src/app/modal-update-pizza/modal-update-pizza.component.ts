import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PizzaModel } from '../PizzaModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-update-pizza',
  templateUrl: './modal-update-pizza.component.html',
  styleUrls: ['./modal-update-pizza.component.css']
})
export class ModalUpdatePizzaComponent implements OnInit {

  @Input() public pizza:PizzaModel;
  @Output() passEntry: EventEmitter<PizzaModel> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.pizza);
  }

  updatePizza() {
    this.passEntry.emit(this.pizza);
  }

}
