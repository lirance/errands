import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Order} from "../_models/order";
import {PersonalOrderShow} from "../_models";

@Injectable()

export class OrderService {
  constructor(private http: HttpClient) {
  }

  getOrderlist() {
    return this.http.get<Order[]>('http://localhost:8080/orders/getOrders');
  }

  createOrder(order: Order) {
    return this.http.post('http://localhost:8080/order/create?userid=' + order.maker + '&itemlist=' + order.itemlist +
      '&storeadd='+order.storeadd+'&destination='+order.destination+'&timelimit='+order.timelimit+'&tip='+order.tip, order);
  }

  getOrderDetail(orderid: string){
    return this.http.get<Order>('http://localhost:8080/orders/getOrderDetailById?orderId=' + orderid);
  }

  acceptOrder(userid:string, orderid:string){
    return this.http.get<string>('http://localhost:8080/order/accept?userId=' + userid + '&orderId=' + orderid);
  }

  completeOrder(userid:string, orderid:string){
    return this.http.get<string>('http://localhost:8080/order/complete?userId='+ userid + '&orderId=' + orderid);
  }

  rateOrder(userid:string, orderid:string, rate:string){
    return this.http.get<string>('http://localhost:8080/order/rate?orderId='+ orderid + '&userId=' + userid + '&rate=' + rate);
  }
  getCreatedOrder(userid:string){
    return this.http.get<PersonalOrderShow[]>('http://localhost:8080/orders/getCreateOrder?userId=' + userid);
  }

  getAcceptedOrder(userid:string){
    return this.http.get<PersonalOrderShow[]>('http://localhost:8080/orders/getAcceptedOrder?userId=' + userid);
  }

}
