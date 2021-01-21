import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url = "http://localhost:3000/"

  constructor(private HttpClient:HttpClient) { }

  getProperties()
  {
    const httpOption = {
      headers : new HttpHeaders(
        {
          token :sessionStorage['token']
        }
      )
    }
    return this.HttpClient.get(this.url+"properties",httpOption)
  
  }

  getPropertyRequirement()
  {
    const httpOption = {
      headers : new HttpHeaders(
        {
          token :sessionStorage['token']
        }
      )
    }
    return this.HttpClient.get(this.url+"property_requirement",httpOption)
  }

  getRevenue()
  {
    const httpOption = {
      headers : new HttpHeaders(
        {
          token :sessionStorage['token']
        }
      )
    }
    return this.HttpClient.get(this.url+"revenue",httpOption)
  }
}
