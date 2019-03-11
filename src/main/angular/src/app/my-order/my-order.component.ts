import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  switch_flag: number = 0;
  created_active: string = 'active';
  accepted_active: string = '';

  constructor() { }

  ngOnInit() {

  }

  switch_created(): void{
    this.switch_flag = 0;
    this.accepted_active = '';
    this.created_active = 'active';
  }

  switch_accepted(): void{
    this.switch_flag = 1;
    this.accepted_active = 'active';
    this.created_active = '';
  }

}
