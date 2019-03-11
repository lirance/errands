import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OrderService} from "../_services/order.service";
import {first} from "rxjs/operators";
import {AlertService} from "../_services";
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {
  orderForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderServie: OrderService,
    private alertService: AlertService,
    private location: Location
    ) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      orderid: [],
      itemlist: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      storeadd: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      destination: ['', Validators.maxLength(50)],
      state: [],
      timelimit: ['', Validators.compose([Validators.required, Validators.pattern('^\\d{1,3}?$')])],
      tip: ['', Validators.compose([Validators.required,Validators.pattern('^\\d{0,5}(\\.\\d{1,2})?$')])],
      maker: [],
      recipient: []
    });
  }

  get f() {
    return this.orderForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.orderForm.value.maker = localStorage.getItem('currentUserID');
    if(!this.orderForm.controls.itemlist.errors && !this.orderForm.controls.storeadd.errors &&
      !this.orderForm.controls.destination.errors && !this.orderForm.controls.timelimit.errors &&
      !this.orderForm.controls.tip.errors){
    this.orderServie.createOrder(this.orderForm.value).pipe(first()).subscribe(
      success=>{
        console.log('success!');
        this.router.navigate(['/dashboard', {outlets: {'aux': ['dashhome']}}]);
        });
      };
    this.loading = true;
  }

  backtolast(){
    this.location.back();
  }
}
