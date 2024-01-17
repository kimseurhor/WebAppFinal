import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(email: string, password: string) {
    // Replace 'your-api-endpoint' with the actual endpoint of your API.
    return this.http.post('http://localhost:8080/api/users/login', { email, password })

    .pipe(
      // Assuming your API returns the token in the response.
      // You can modify this part based on your actual API response.
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response._id);
        }
      })
    );
  }
}
