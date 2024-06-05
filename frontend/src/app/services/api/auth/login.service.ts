import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRepresentation } from '../models/user-representation';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/login';
  private registerUrl = 'http://localhost:8080/register';

  constructor(private http:HttpClient) { }

  loginUser(user:UserRepresentation){
    const BlogsUrl = this.loginUrl;
    return this.http.post<UserRepresentation>(BlogsUrl,user);
  }

  registerUser(user:UserRepresentation){
    const BlogsUrl = this.registerUrl;
    return this.http.post<UserRepresentation>(BlogsUrl,user);
  }
}
