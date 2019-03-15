import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../_services";
import {first} from "rxjs/operators";
import {User} from "../_models";
import {Location} from "@angular/common";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private location: Location) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    let userid = this.route.snapshot.paramMap.get('userid');
    this.userService.getUserById(userid).pipe(first()).subscribe(result=>{
      this.currentUser = result;
    });
  }

  backtolast(){
    this.location.back();
  }

}
