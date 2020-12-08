import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLogged = false;
  constructor() {
    this.isLogged = Boolean(localStorage.getItem('isLogged'));
  }

  logIn(formValue: { email: string, password: string }): void {
    this.isLogged = true;
    localStorage.setItem('isLogged', 'true');
  }

  logOut(): void {
    this.isLogged = false;
    localStorage.setItem('isLogged', '');
  }
}
