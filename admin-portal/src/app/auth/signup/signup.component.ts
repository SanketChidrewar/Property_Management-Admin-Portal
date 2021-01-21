import { AdminService } from './../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = ""
  password = ""
  cpassword = "" 
  body = {}
  data:any = []
  constructor(private toastr: ToastrService,private AdminService:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

  onSignup()
  {
    if(this.email == "")
      this.toastr.error("Invalid Email!")
    else if(this.password == "")
      this.toastr.error("Invalid Password!")
    else if(this.cpassword != this.password)
      this.toastr.error("Password Mismatch!")
    else{
      this.body['email'] = this.email;
      this.body['password'] = this.password;

      this.AdminService.userSigup(this.body).subscribe(res=>{
        this.data = res
          console.log(this.data)

          if(this.data.status == "error")
          {
            if(this.data.error.code == "ER_DUP_ENTRY")
            {
              this.toastr.error("User Already Exist!")
            }
            else
            {
              this.toastr.error("Faild!")
            }
          }
          else
          {
            this.toastr.success("New User Created!")
            this.route.navigate(['/auth/signin'])
          }
      })
    }
  }
}
