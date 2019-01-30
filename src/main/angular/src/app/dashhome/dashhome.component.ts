import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Order} from "../_models/order";
import {OrderService} from "../_services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})

export class DashhomeComponent implements OnInit {

  orderList: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this.orderService.getOrderlist().pipe(first()).subscribe(orderList => {
      console.log(orderList);
      this.orderList = orderList;
    });
  }


}
