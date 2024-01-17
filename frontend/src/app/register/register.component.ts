import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private registerService: RegisterService, private router: Router) {}

  name = '';
  email = '';
  password = '';

  onSubmit(name: string,email: string, password: string) {
    this.registerService.register(name, email, password).subscribe(
      (response) => {
        // Authentication successful, redirect to the homepage.
        console.log('Register successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle authentication failure (e.g., show error message).
        console.error('Register failed', error);
      }
    );
  }

  onClick (){
    this.router.navigate(['/login']);
  }

}
