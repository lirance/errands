import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import { OrderService } from "../_services";
import { PersonalOrderShow } from "../_models/personalOrderShow";

@Component({
  selector: 'app-accepted-order-list',
  templateUrl: './accepted-order-list.component.html',
  styleUrls: ['./accepted-order-list.component.css']
})

export class AcceptedOrderListComponent implements OnInit {
  currentUserID: string;
  acceptOrderList: PersonalOrderShow [] = [] ;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.currentUserID= localStorage.getItem('currentUserID');
    this.getAcceptedOrderlist();
  }

  getAcceptedOrderlist() {
    this.orderService.getAcceptedOrder(this.currentUserID).pipe(first()).subscribe(orders=>{
      this.acceptOrderList = orders;
    });
  }

}
