import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "./user.class";

const baseurl = "http://localhost:8080/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( 
    private http: HttpClient
    ) { }
   getAll(): Observable<User[]>{
     return this.http.get(`${baseurl}`) as Observable<User[]>;
   }
}
