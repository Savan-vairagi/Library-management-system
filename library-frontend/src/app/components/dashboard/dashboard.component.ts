import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container mt-4">
      <!-- Header -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h1 class="display-6">📚 Library Management System</h1>
              <p class="lead text-muted">Welcome back, {{ currentUser?.username || 'User' }}!</p>
            </div>
            <div>
              <button class="btn btn-outline-danger" (click)="logout()">
                <i class="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats Cards -->
      <div class="row mb-4">
        <div class="col-md-4">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <h4>📖 Books</h4>
                  <p class="card-text">Manage your library collection</p>
                </div>
                <div class="align-self-center">
                  <i class="bi bi-book-fill display-4 opacity-50"></i>
                </div>
              </div>
              <a routerLink="/books" class="btn btn-light btn-sm mt-2">
                <i class="bi bi-arrow-right"></i> Manage Books
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-success text-white">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <h4>👥 Members</h4>
                  <p class="card-text">Manage library members</p>
                </div>
                <div class="align-self-center">
                  <i class="bi bi-people-fill display-4 opacity-50"></i>
                </div>
              </div>
              <a routerLink="/members" class="btn btn-light btn-sm mt-2">
                <i class="bi bi-arrow-right"></i> Manage Members
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-warning text-dark">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <h4>📋 Loans</h4>
                  <p class="card-text">Track book loans & returns</p>
                </div>
                <div class="align-self-center">
                  <i class="bi bi-journal-bookmark-fill display-4 opacity-50"></i>
                </div>
              </div>
              <a routerLink="/loans" class="btn btn-dark btn-sm mt-2">
                <i class="bi bi-arrow-right"></i> Manage Loans
              </a>
            </div>
          </div>
        </div>
      </div>


      <!-- Quick Actions -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="card border-primary">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">🚀 Quick Actions</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <a routerLink="/books" class="btn btn-outline-primary w-100 mb-2">
                    <i class="bi bi-plus-circle"></i><br>Add New Book
                  </a>
                </div>
                <div class="col-md-3">
                  <a routerLink="/members" class="btn btn-outline-success w-100 mb-2">
                    <i class="bi bi-person-plus"></i><br>Add New Member
                  </a>
                </div>
                <div class="col-md-3">
                  <a routerLink="/loans" class="btn btn-outline-warning w-100 mb-2">
                    <i class="bi bi-journal-plus"></i><br>Issue New Book
                  </a>
                </div>
                <div class="col-md-3">
                  <a routerLink="/loans" class="btn btn-outline-info w-100 mb-2">
                    <i class="bi bi-list-check"></i><br>View All Loans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 20px;
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .display-6 {
      font-weight: 600;
    }
    .opacity-50 {
      opacity: 0.5;
    }
  `]
})
export class DashboardComponent implements OnInit {
  currentUser: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
  }
}
