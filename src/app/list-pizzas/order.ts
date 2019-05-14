import { OrderDetails } from './order-details';

export class Order {
    //order date and time
    private date_time: Date;
    /***
     *Assume that all orders will be sent to the headquearters branch.
     *Else each admin will have a user_Metadata that can store this info. 
     */    
    //branch = Number;
    private total: number;
    //user_id
    private user_mail : String;
    //list of orderDetails
    private order_detail:OrderDetails[];
    
    constructor(date_time, user_mail, order_details){
        this.date_time = date_time;
        this.user_mail = user_mail;
        this.order_detail = order_details;
        this.total = this.calculateOrderTotal(order_details); 
    }

    calculateOrderTotal(order_details:OrderDetails[]): number {
        var i;
        let sumTotal:number = 0;
        for(i=0; i<order_details.length; i++){
            sumTotal = sumTotal + order_details[i].getSubtotal(); 
        }
        return sumTotal;
    }

}