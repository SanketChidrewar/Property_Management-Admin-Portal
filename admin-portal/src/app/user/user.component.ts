import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = []
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers()
  {
    this.userService.getUsers().subscribe(res=>{
      this.users = res['data']
    })
  }

  toggleActiveStatus(user) {
    this.userService
    .updateStatus(user)
    .subscribe(response => {
    if (response['status'] == 'success') {
    this.loadUsers()
    } else {
    console.log(response['error'])
    }
    })
  } 
}
