import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from '@angular/router';
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { OrderService} from "../_services";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-rate-order-dialog',
  templateUrl: './rate-order-dialog.component.html',
  styleUrls: ['./rate-order-dialog.component.css'],
  providers: [NgbRatingConfig]
})

export class RateOrderDialogComponent implements OnInit {
  orderid: string;
  state: string;
  rate = 0;
  currentUserID: string;
  submitResult: boolean;
  rateResult: string;

  constructor(private router: Router,
              private dialogRef: MatDialogRef<RateOrderDialogComponent>,
              private orderService: OrderService,
              @Inject(MAT_DIALOG_DATA) data,
              config: NgbRatingConfig
  )
  {
    this.orderid = data.orderid;
    this.state = data.state;
    config.max = 5;
  }

  ngOnInit() {
    this.submitResult = false;
  }

  close() {
    this.dialogRef.close();
    window.location.reload();
  }

  submit(){
    this.submitResult = true;
    this.currentUserID= localStorage.getItem('currentUserID');
    this.orderService.rateOrder(this.currentUserID, this.orderid, this.rate.toString()).pipe(first()).subscribe(result=>{
      result.toString();
      console.log(result);
      this.rateResult = result;

    })
  }

}
