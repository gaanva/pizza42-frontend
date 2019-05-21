import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../list-pizzas/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit {
  @Input() public order:Order;
  @Output() passEntry: EventEmitter<Order> = new EventEmitter();
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  sendOrder(){
    console.log(this.order);
    this.passEntry.emit(this.order);
  }

  updateOrderTotal(){
    this.order.updateOrderTotal();
    console.log(this.order);
  }
}
