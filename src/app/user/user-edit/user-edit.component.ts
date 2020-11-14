import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
//ActivatedRoute pulls the number(or any other data needed to be read) from the route (url); Route itself helps to navigate to the list back
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  save(): void {
    //due to the 2-way binding, we don't need to pull the data out of the input box and stick to the variable, the change is already there at the moment of editing by the user (synchronized)
    console.log(this.user);
    this.usersvc.update(this.user).subscribe(
      resp => {
        console.debug("User Updated:", resp);
        this.router.navigateByUrl("/user/list");
      },
      err => { console.error(err); }
    )
  }

  ngOnInit(): void {
    //snapshot takes the picture, params - key-value object; + turn the string into a number
    let id = +this.route.snapshot.params.id;
    this.usersvc.getByPK(id).subscribe(
      resp => {
        console.debug("User", resp);
        this.user = resp;
      },
      err => { console.error(err); }
    )
  }
}
