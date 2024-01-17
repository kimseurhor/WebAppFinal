import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private loginService: LoginService, private router: Router) {}


onSubmit(email: string, password: string) {
  this.loginService.login(email, password).subscribe(
    (response) => {
      // Authentication successful, redirect to the homepage.
      // console.log('Login successful', response);
      this.router.navigate(['/homepage']);
    },
    (error) => {
      // Handle authentication failure (e.g., show error message).
      console.error('Login failed', error);
    }
  );
}
}