import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PizzaModel } from '../PizzaModel';

@Component({
  selector: 'app-modal-update-pizza',
  templateUrl: './modal-update-pizza.component.html',
  styleUrls: ['./modal-update-pizza.component.css']
})
export class ModalUpdatePizzaComponent implements OnInit {

  @Input() public pizza:PizzaModel;
  @Output() passEntry: EventEmitter<PizzaModel> = new EventEmitter();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.pizza);
  }

  updatePizza() {
    this.passEntry.emit(this.pizza);
  }

}
