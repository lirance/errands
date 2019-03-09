import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {OrderService} from "../_services/order.service";
import {Router} from "@angular/router";
import {Order} from "../_models/order";

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})

export class DashhomeComponent implements OnInit {

  orderList: Order[] = [];
  currentUserID: string;

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
    this.getOrderList();
    this.currentUserID= localStorage.getItem('currentUserID');
  }

  getOrderList() {
    this.orderService.getOrderlist().pipe(first()).subscribe(orderList => {
      console.log(orderList);
      this.orderList = orderList;
    });
  }


}
