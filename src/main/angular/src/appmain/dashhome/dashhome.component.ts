import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {

  switch_flag: number = 1;
  post_active: string = 'active';
  request_active: string = '';

  constructor() { }

  ngOnInit() {
  }


  switch_request(): void{
    this.switch_flag = 0;
    this.post_active = '';
    this.request_active = 'active';
  }

  switch_post(): void{
    this.switch_flag = 1;
    this.post_active = 'active';
    this.request_active = '';
  }


}
