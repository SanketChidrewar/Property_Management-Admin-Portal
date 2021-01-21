import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email = ""
  password = ""
  body = {}
  constructor(private AdminService:AdminService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  onSignin()
  {
    this.body['emailId'] = this.email;
    this.body['password'] = this.password;

    if(this.email == "")
    {
      this.toastr.error("Invalid Email Address!")
    }
    else if(this.password == "")
    {
      this.toastr.error("Invalid Password!")
    }
    else{
      this.AdminService.userSigin(this.body).subscribe(res=>{
        if(res['status']=="error")
        {
          this.toastr.error("Invalid Credential")
        }
        else{
          sessionStorage['token'] = res['data'][0]['token'];
          sessionStorage['emailId'] = res['data'][0]['emailId']
          this.toastr.success(`Welcome ${this.email}!`)
          this.router.navigate(['/dashboard/properties'])
        }
      })
    }
  }

}
