import { Component, OnInit } from '@angular/core';
import { Order } from "../_models/order";
import { ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { OrderService } from "../_services";
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CompleteDialogComponent } from "../complete-dialog/complete-dialog.component";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderDetail: Order;
  orderid: string;
  currentUserId: string;
  completeResult: string;
  cancelResult = false;
  deleteResult = false;



  constructor(private router: Router, private route: ActivatedRoute, private  orderService: OrderService, private location: Location, private dialog: MatDialog) { }

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

  complete(){
    let orderid = this.route.snapshot.paramMap.get('orderid');
    this.orderService.completeOrder(this.currentUserId, orderid).pipe(first()).subscribe( result=>{
      result.toString();
      this.completeResult = result;
      this.openCompleteDialog();
    });
  }

  cancelAcceptedOrder(){
    let orderid = this.route.snapshot.paramMap.get('orderid');
    let userid = localStorage.getItem('currentUserID');
    this.orderService.cancelAcceptedOrder(userid, orderid).pipe(first()).subscribe(result=>{
      if(result){
        this.cancelResult = true;
        this.backtolast();
      };
    });
  }

  deleteOrder(){
    let orderid = this.route.snapshot.paramMap.get('orderid');
    let userid = localStorage.getItem('currentUserID');
    this.orderService.deleteOrder(userid, orderid).pipe(first()).subscribe(result=>{
      if(result){
        this.deleteResult = true;
        this.backtolast();
      };
    });
  }

  openCompleteDialog():void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      completeResult: this.completeResult
    };

    this.dialog.open(CompleteDialogComponent, dialogConfig);
  }

  backtolast(){
    this.location.back();
  }

}
