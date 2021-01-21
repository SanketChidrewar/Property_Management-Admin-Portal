import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.toastr.success(`Logout ${sessionStorage['emailId']}`);
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('emailId')
    this.router.navigate(['/auth/signin'])
    } 
}
