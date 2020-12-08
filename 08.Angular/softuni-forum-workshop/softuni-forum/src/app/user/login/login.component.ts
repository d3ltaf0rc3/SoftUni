import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../form-styles.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  loginHandler(formValue: { email: string, password: string }): void {
    this.userService.logIn(formValue).subscribe(() => this.router.navigate(['/']));
  }
}
