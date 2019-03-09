import { Component, OnInit } from '@angular/core';
import { Order } from "../_models/order";
import { ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { OrderService } from "../_services";


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderDetail: Order;
  orderid: string;
  currentUserId: string;

  constructor(private router: Router, private route: ActivatedRoute, private  orderService: OrderService) { }

  ngOnInit() {
    this.getOrder();
    this.currentUserId = localStorage.getItem('currentUserID');
  }

  getOrder(){
    let orderid = this.route.snapshot.paramMap.get('orderid');
    this.orderService.getOrderDetail(orderid).pipe(first()).subscribe(order =>{
      this.orderDetail = order;
    });
  }


}
