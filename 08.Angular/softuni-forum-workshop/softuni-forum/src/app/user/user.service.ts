import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class UserService {
  currentUser: IUser;

  get isLogged(): boolean {
    return !!this.currentUser;
  }
  constructor(private http: HttpClient) { }

  logIn(formValue: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/api/users/login`, formValue, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  register(formValue: object): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/api/users/register`, formValue, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  logOut(): Observable<any> {
    return this.http.post(`http://localhost:3000/api/users/logout`, {}, { withCredentials: true });
  }
}
