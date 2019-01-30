import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OrderService} from "../_services/order.service";
import {first} from "rxjs/operators";
import {AlertService} from "../_services";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {
  orderForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderServie: OrderService,
    private alertService: AlertService,
    ) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      orderid: [],
      itemlist: ['', Validators.required],
      storeadd: ['', Validators.required],
      destination: [''],
      state: ['', Validators.required],
      timelimit: ['', Validators.required],
      tip: ['', Validators.required],
      maker: [],
      recipient: []
    });
  }
  onSubmit() {
    this.loading = true;
    this.orderForm.value.maker = localStorage.getItem('currentUserID');
    this.orderServie.createOrder(this.orderForm.value).pipe(first()).subscribe(
      success=>{
        console.log('success!');
        this.alertService.success('Order Created!', true);
        this.router.navigate(['/dashboard', {outlets: {'aux': ['dashhome']}}]);
      }
    )
  }
}
