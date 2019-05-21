import { PizzaModel } from '../PizzaModel';

export class OrderDetails {
    private pizza:PizzaModel;
    private quantity: number;
    private subtotal: number;

    constructor(pizza:PizzaModel, quantity:number){
        this.pizza=pizza;
        this.quantity = quantity;
        this.subtotal = quantity*pizza.price;
    }

    getSubtotal():number{
        this.subtotal = this.quantity * this.pizza.price;
        return this.subtotal;
    }





}
