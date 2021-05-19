import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogModel } from '../models/user-log.model';
import { UserModel } from '../models/user.model';

const options = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    //Authorization: 'my'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  baseUrlLog = 'http://localhost:3000/auth/login';
  baseUrl = 'http://localhost:3000/user';

  login(user: UserLogModel): Observable<UserLogModel[]> {
    console.log(user);
    return this.http.post<UserLogModel[]>(this.baseUrlLog,user, options);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl, options);
  } 

  getUser(user: UserLogModel): Observable<UserLogModel[]> {
    return this.http.get<UserLogModel[]>(`${this.baseUrl}/${user}`, options);
  }

  saveUser(user: UserModel): Observable<UserModel[]> {
    return user.id ? this.editUser(user) : this.createUser(user);
  }

  editUser(user: UserModel): Observable<UserModel[]> {
    return this.http.put<UserModel[]>(
      `${this.baseUrl}/${user.id}`,
      user,
      options
    );
  }

  createUser(user: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(this.baseUrl, user, options);
  }

  deleteUser(user: UserModel): Observable<UserModel[]> {
    return this.http.delete<UserModel[]>(`${this.baseUrl}/${user}`, options);
  }

}
