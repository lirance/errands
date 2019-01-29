import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Order} from "../_models/order";

@Injectable()

export class OrderService {
  constructor(private http: HttpClient) {
  }

  getOrderlist() {
    return this.http.get<Order[]>('/orders/getOrders');
  }

  createOrder(order: Order) {
    return this.http.post('/orders/create?userid=' + order.maker + '&itemlist=' + order.itemlist +
      '&storeadd='+order.storeadd+'&destination='+order.destination+'&timelimit='+order.timelimit+'&tip='+order.tip, order);
  }

}
