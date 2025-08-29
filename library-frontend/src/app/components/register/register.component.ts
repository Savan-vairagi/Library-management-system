import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2>📝 Register for Library</h2>
          <div class="card p-4">
            <form (ngSubmit)="onSubmit()">
              <div class="form-group mb-3">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" 
                       [(ngModel)]="userData.username" name="username"
                       placeholder="Choose a username">
              </div>
              <div class="form-group mb-3">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" 
                       [(ngModel)]="userData.email" name="email"
                       placeholder="Enter your email">
              </div>
              <div class="form-group mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" 
                       [(ngModel)]="userData.password" name="password"
                       placeholder="Choose a password">
              </div>
              <button type="submit" class="btn btn-success w-100 mb-3" [disabled]="isLoading">
                <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                {{ isLoading ? 'Creating Account...' : 'Register' }}
              </button>
              <div class="text-center">
                <small class="text-muted">Registration is simplified for demo purposes</small>
              </div>
              <div class="text-center mt-3">
                <a routerLink="/login" class="text-decoration-none">Already have an account? Login here</a>
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
export class RegisterComponent {
  userData = { username: '', email: '', password: '' };
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';
    
    // Minimal validation - just check if fields are filled
    if (!this.userData.username || !this.userData.email || !this.userData.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
    
    // Very basic email check - just ensure it contains @
    if (!this.userData.email.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }
    
    this.isLoading = true;
    
    this.authService.register(this.userData).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.successMessage = 'Registration successful! Redirecting to dashboard...';
          this.authService.setAuthData(response);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Registration error:', error);
        this.errorMessage = 'Registration failed. Please try again.';
      }
    });
  }
}
