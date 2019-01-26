import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";


@Injectable()

export class UserService {
  constructor(private http:HttpClient){}

  login(phone:string, password:string){

     return this.http.get<boolean>(`${environment.apiurl}/user/login?phone=` + phone + `&password=` + password);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('currentUser');
    localStorage.clear();

  }

}

