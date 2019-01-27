import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../_services/user.service";
import { EqualValidator} from "../_directives/equal-validator.directive";

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username:['', Validators.required],
      phone:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', [Validators.required, EqualValidator('password')]]
    });
  }
  onSubmit() {}
}
