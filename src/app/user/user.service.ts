import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "./user.class";
import { UrlSerializer } from '@angular/router';

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
   getByPK(id: number): Observable<User>{
     return this.http.get(`${baseurl}/${id}`) as Observable<User>;
   }
   update (user: User): Observable<User>{
     return this.http.put(`${baseurl}/${user.id}`, user ) as Observable<User>;
   }
}
