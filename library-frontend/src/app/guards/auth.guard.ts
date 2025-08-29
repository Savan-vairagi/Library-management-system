import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Simplified authentication check
    const isAuthenticated = this.authService.isAuthenticated();
    
    if (isAuthenticated) {
      return true;
    }
    
    // For development - show a friendly message instead of just redirecting
    console.log('Access denied. Please login to continue.');
    this.router.navigate(['/login']);
    return false;
  }
}
