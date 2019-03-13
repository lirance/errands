import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import { OrderService } from "../_services";
import { PersonalOrderShow } from "../_models/personalOrderShow";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {RateOrderDialogComponent} from "../rate-order-dialog/rate-order-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-accepted-order-list',
  templateUrl: './accepted-order-list.component.html',
  styleUrls: ['./accepted-order-list.component.css']
})

export class AcceptedOrderListComponent implements OnInit {
  currentUserID: string;
  acceptOrderList: PersonalOrderShow [] = [] ;

  constructor(private orderService: OrderService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUserID= localStorage.getItem('currentUserID');
    this.getAcceptedOrderlist();
  }

  getAcceptedOrderlist() {
    this.orderService.getAcceptedOrder(this.currentUserID).pipe(first()).subscribe(orders=>{
      this.acceptOrderList = orders;
    });
  }
  rate(orderid:number, state:string){
    this.openRateDialog(orderid, state);

  }
  openRateDialog(orderid:number, state:string): void{

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { orderid: orderid, state: state};

    this.dialog.open(RateOrderDialogComponent, dialogConfig);
  }
}
