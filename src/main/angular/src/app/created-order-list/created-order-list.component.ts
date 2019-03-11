import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import { OrderService } from "../_services";
import { ActivatedRoute, Router} from '@angular/router';
import { PersonalOrderShow } from "../_models/personalOrderShow";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RateOrderDialogComponent } from "../rate-order-dialog/rate-order-dialog.component";

@Component({
  selector: 'app-created-order-list',
  templateUrl: './created-order-list.component.html',
  styleUrls: ['./created-order-list.component.css']
})
export class CreatedOrderListComponent implements OnInit {
  currentUserID: string;
  createdOrderList: PersonalOrderShow [] = [] ;

  constructor(private orderService: OrderService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUserID= localStorage.getItem('currentUserID');
    this.getCreatedOrderlist();
  }

  getCreatedOrderlist(){
    this.orderService.getCreatedOrder(this.currentUserID).pipe(first()).subscribe(orders=>{
      this.createdOrderList = orders;
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
