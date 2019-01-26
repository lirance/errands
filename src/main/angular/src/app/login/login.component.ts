import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  result = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    this.userService.login(this.loginForm.controls['phone'].value, this.loginForm.controls['password'].value).subscribe(data=>this.result);
    console.log(this.loginForm.controls['phone'].value)
    console.log(this.loginForm.controls['password'].value)
    console.log(this.result)
    if(this.result){
      this.router.navigate(['/dashboard']);
    }
  }


}
