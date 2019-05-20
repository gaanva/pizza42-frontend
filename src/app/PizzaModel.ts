export class PizzaModel {
    id: Number;
    pizza: String;
    description: String;
    price: number;    

    constructor(pizza, description, price){
        this.id=0;
        this.pizza = pizza;
        this.description = description;
        this.price = price;
    }
}