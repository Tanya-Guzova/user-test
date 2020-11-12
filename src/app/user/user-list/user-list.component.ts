import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersvc: UserService) {
   
   }

  ngOnInit(): void {
    this.usersvc.getAll().subscribe(
      resp => {console.log(resp);
      this.users = resp as User[]},
      err => {console.error(err);}
    )
  }

}
