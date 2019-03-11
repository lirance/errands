import { Component, OnInit } from '@angular/core';
import { AlertService, UserService} from "../_services";
import {NavigationEnd, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "../_models";
import {first} from "rxjs/operators";
import { Location } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileForm: FormGroup;
  loading = false;
  submitted = false;
  currentUserID: string;
  currentUser: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private location: Location
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.profileForm = this.formBuilder.group({
      userId: [this.currentUser.userid, Validators.required],
      userName: [this.currentUser.username, Validators.required],
      password: [this.currentUser.password, Validators.required],
      phone: [this.currentUser.phone, Validators.required],
      address: [this.currentUser.address, Validators.required],
      rateNumber: [this.currentUser.ratenumber, Validators.required],
      averageRate: [this.currentUser.averagerate]
    });

  }

  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.profileEdit(this.profileForm.value.userId, this.profileForm.value.phone,
      this.profileForm.value.userName, this.profileForm.value.address)
      .pipe(first())
      .subscribe(
        data=>{data.toString();
          if(data) {
            console.log('update successful');
            this.currentUserID= localStorage.getItem('currentUserID');
            localStorage.removeItem('currentUser');
            this.userService.getUserById(this.currentUserID).pipe(first()).subscribe(user => {
              this.currentUser=user;
              localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            });
            this.router.navigate(['/dashboard', {outlets: {'aux': ['dashhome']}}]);
          };

          if(!data) {
            console.log('update error');
          };

        });
  }

  backtolast(){
    this.location.back();
  }

}
