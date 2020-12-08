import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../form-styles.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) { }

  submitHandler(formValue: object): void {
    this.userService.register(formValue).subscribe(() => this.router.navigate(['/']));
  }
}
