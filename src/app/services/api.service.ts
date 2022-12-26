import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  adduser(user:User){
    return this.http.post<User>("https://63a98de2594f75dc1db90a6b.mockapi.io/users",user);
  }

  getuser(cin:string){
    return this.http.get<User[]>("https://63a98de2594f75dc1db90a6b.mockapi.io/users/?cin="+cin)
  }

}
