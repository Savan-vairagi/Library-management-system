import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2>📚 Library Login</h2>
          <div class="card p-4">
            <form (ngSubmit)="onSubmit()">
              <div class="form-group mb-3">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" 
                       [(ngModel)]="credentials.username" name="username" 
                       placeholder="Enter username (admin or user)">
              </div>
              <div class="form-group mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" 
                       [(ngModel)]="credentials.password" name="password"
                       placeholder="Enter password">
              </div>
              <button type="submit" class="btn btn-primary w-100 mb-3" [disabled]="isLoading">
                <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                {{ isLoading ? 'Logging in...' : 'Login' }}
              </button>
              <div class="text-center">
                <small class="text-muted">Test credentials: admin/admin123 or user/user123</small>
              </div>
              <div class="text-center mt-3">
                <a routerLink="/register" class="text-decoration-none">Don't have an account? Register here</a>
              </div>
            </form>
            <div *ngIf="errorMessage" class="alert alert-warning mt-3">
              <i class="bi bi-exclamation-triangle"></i> {{ errorMessage }}
            </div>
            <div *ngIf="successMessage" class="alert alert-success mt-3">
              <i class="bi bi-check-circle"></i> {{ successMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin-top: 100px;
    }
  `]
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Clear previous messages
    this.errorMessage = '';
    this.successMessage = '';
    
    // Basic validation - only check if fields are not empty
    if (!this.credentials.username || !this.credentials.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }
    
    this.isLoading = true;
    
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.authService.setAuthData(response);
          this.successMessage = 'Login successful! Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login error:', error);
        this.errorMessage = 'Login failed. Please try again or use test credentials.';
      }
    });
  }
}
