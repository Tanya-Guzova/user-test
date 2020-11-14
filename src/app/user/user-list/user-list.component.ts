import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchCriteria: string = "";
  sortCriteria: string = "userName";
  ascSequence: boolean = true;

  sortColumn(column: string): void {

    if (column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      //return leaves the method
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

  constructor(private usersvc: UserService) {

  }

  ngOnInit(): void {
    this.usersvc.getAll().subscribe(
      resp => {
        console.log(resp);
        this.users = resp as User[]
      },
      err => { console.error(err); }
    )
  }

}
