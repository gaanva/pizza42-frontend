export class PizzaModel {
    pizza: String;
    description: String;
    price: Number;    

    constructor(pizza, description, price){
        this.pizza = pizza;
        this.description = description;
        this.price = price;
    }
}