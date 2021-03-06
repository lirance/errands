import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../_services/user.service";
import { EqualValidator} from "../_directives/equal-validator.directive";

import { first } from 'rxjs/operators';
import {User} from "../_models";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  user: User;
  result = false;
  invalidsignup = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username:['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      phone:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address:['', Validators.compose([Validators.required,Validators.maxLength(50)])],
      password:['', [Validators.required,Validators.maxLength(20)]],
      confirmPassword:['', [Validators.required, EqualValidator('password')]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      console.log(this.signupForm.value);
      return;
    }

    this.userService.signup(this.signupForm.value).pipe(first()).subscribe(
      data=>{data.toString();
      if(data) {
        this.router.navigate(['/login']);
      };
      if(!data){
        this.invalidsignup = true;
      };
      },
      error => {console.log('error')}
      );
  }
}
