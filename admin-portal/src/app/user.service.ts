import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/user"

  constructor(private httpClient:HttpClient) { }

  getUsers() {
    // add the token in the request header
    const httpOptions = {
    headers: new HttpHeaders({
    token: sessionStorage['token']
    })
    };
    
    return this.httpClient.get(this.url, httpOptions)
    } 

  updateStatus(user)
  {
    const httpOptions = {
      headers: new HttpHeaders({
      token: sessionStorage['token']
      })
      };
      
    const body = {}
    return this.httpClient.put(this.url + `/${user['userId']}/${user['isActive'] == 0 ? 1 : 0}`, body, httpOptions)
  }
}
