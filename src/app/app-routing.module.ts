import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UserListComponent} from "./user/user-list/user-list.component";
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path:"", redirectTo:"/user/list", pathMatch:"full"},
  {path: "user/list", component: UserListComponent},
  //passing user id variable in the route
  {path: "user/edit/:id", component: UserEditComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
