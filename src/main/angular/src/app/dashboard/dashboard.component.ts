import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../_models';
import { first } from 'rxjs/operators';
import { UserService } from '../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  currentUser: User;
  currentUserID: string;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.currentUserID= localStorage.getItem('currentUserID');
    this.getUserbyuserId(this.currentUserID);

  }
  getUserbyuserId(userId: string){
    this.userService.getUserById(this.currentUserID).pipe(first()).subscribe(user => {
      this.currentUser=user;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    });}

  userLogout(): void{
    localStorage.clear();
    this.router.navigate([''])
  }


}
