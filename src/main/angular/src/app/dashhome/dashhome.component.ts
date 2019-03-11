import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {OrderService} from "../_services/order.service";
import {Router} from "@angular/router";
import {Order} from "../_models/order";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AcceptDialogComponent} from "../accept-dialog/accept-dialog.component";

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})

export class DashhomeComponent implements OnInit {

  orderList: Order[] = [];
  currentUserID: string;
  acceptResult: string;


  constructor(private orderService: OrderService, private router: Router,  private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getOrderList();
    this.currentUserID= localStorage.getItem('currentUserID');
  }

  getOrderList() {
    this.orderService.getOrderlist().pipe(first()).subscribe(orderList => {
      this.orderList = orderList;
    });
  }

  accept(orderid:string){
    this.orderService.acceptOrder(this.currentUserID, orderid).pipe(first()).subscribe(result=>{
      result.toString();
      console.log(result);
      this.acceptResult = result;
      this.openAcceptDialog();
    });

  }
  openAcceptDialog():void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      acceptResult: this.acceptResult
    };

    this.dialog.open(AcceptDialogComponent, dialogConfig);
  }


}
