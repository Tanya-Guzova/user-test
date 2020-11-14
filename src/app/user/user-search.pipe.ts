import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user.class';


@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  //incremental search
  transform(users: User[], searchCriteria: string = ""): User[] {
    if(searchCriteria == ""){
      return users;
    }
    searchCriteria = searchCriteria.toLowerCase();
    //set to empty array to be able to push to it
    let filteredUsers: User[] = [];
    for (let user of users) {
      if (user.id.toString().includes(searchCriteria)){
        filteredUsers.push(user);
        //go get the next user to go through the loop
        continue;
      }
      if(user.userName.toLowerCase().includes(searchCriteria)){
        filteredUsers.push(user);
        //go get the next user to go through the loop
        continue;
      }
      if(user.firstName.toLowerCase().includes(searchCriteria)){
        filteredUsers.push(user);
        //go get the next user to go through the loop
        continue;
      }
      if(user.lastName.toLowerCase().includes(searchCriteria)){
        filteredUsers.push(user);
        //go get the next user to go through the loop
        continue;
      }
      if(user.phoneNumber.toLowerCase().includes(searchCriteria)){
        filteredUsers.push(user);
        //go get the next user to go through the loop
        continue;
      }
      if(user.email.toLowerCase().includes(searchCriteria)){
        filteredUsers.push(user);
        //go get the next user to go through the loop
        continue;
      }
      /*same logic as above can be written as below:
      if (
      user.id.toString().includes(searchCriteria) || 
      user.userName.toLowerCase().includes(searchCriteria) ||
      user.firstName.toLowerCase().includes(searchCriteria) || 
      user.lastName.toLowerCase().includes(searchCriteria) ||
      user.phoneNumber.toLowerCase().includes(searchCriteria) ||
      user.email.toLowerCase().includes(searchCriteria)
      ) {
         filteredUsers.push(user);
      }
      */
    }
    return filteredUsers;
  }

}
