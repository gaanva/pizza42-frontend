export class OrderDetails {
    private pizza:String;
    private price: number;
    private quantity: number;
    private subtotal: number;

    constructor(pizza:String, price:number, quantity:number){
        this.pizza = pizza;
        this.price = price;
        this.quantity = quantity;
        this.subtotal = quantity*price;
    }

    getSubtotal():number{
        return this.subtotal;
    }

}
