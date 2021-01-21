import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{
  url = "http://localhost:3000"
  constructor(private httpClient:HttpClient,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['token']) {
    return true
    }
    this.router.navigate(['/auth/signin'])
    return false 
    } 

  userSigup( data )
  {
    console.log(" service "+data)
    return this.httpClient.post(this.url+"/signup",data)
  }
  userSigin(data)
  {
    console.log(data)
    return this.httpClient.post(this.url+"/signin",data)
  }
}
