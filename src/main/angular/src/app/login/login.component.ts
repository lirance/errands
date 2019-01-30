import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "../_services/user.service";
import { first } from 'rxjs/operators';
import { User } from "../_models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUserID: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.login(this.loginForm.controls['phone'].value, this.loginForm.controls['password'].value).pipe(first()).subscribe(
      data=>{

      if(data.toString()!='-1'){
        this.currentUserID = data;
        localStorage.setItem('currentUserID', JSON.stringify(this.currentUserID));
        this.router.navigate(['/dashboard', {outlets: {'aux': ['dashhome']}}]);
      };

      if(data.toString()=='-1'){
        this.loginForm.controls['password'].setErrors({
          invalidLogin: true
        });
      }
      });


  }


}
