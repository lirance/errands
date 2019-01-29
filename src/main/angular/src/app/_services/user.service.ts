import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../_models/user"

@Injectable()

export class UserService {
  constructor(private http:HttpClient){}

  login(phone:string, password:string){

     return this.http.get<string>(`/user/login/getId?phone=` + phone + `&password=` + password);
  }

  signup(user: User){
    return this.http.post(`/user/register?phone=` + user.phone + `&password=` + user.password +`&username=` + user.username +`&address=` + user.address, user);
  }

  getUserByphone(phone:string){
    return this.http.post(`/user/getUserByPhone?phone=` + phone, phone);
  }

  getUserById(id:string){
    return this.http.get<User>(`/user/getUserById?userid=` + id);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('currentUser');
    localStorage.clear();

  }

}

