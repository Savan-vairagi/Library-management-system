import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService, Loan } from '../../services/loan.service';
import { BookService, Book } from '../../services/book.service';
import { MemberService, Member } from '../../services/member.service';

@Component({
  selector: 'app-loan-list',
  template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2><i class="bi bi-journal-bookmark"></i> Loans Management</h2>
            <button class="btn btn-success" (click)="openAddForm()">
              <i class="bi bi-plus-circle"></i> Issue New Book
            </button>
          </div>
        </div>
      </div>

      <!-- Status Filter -->
      <div class="row mb-3">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Search by book title or member name..." 
                 [(ngModel)]="searchTerm" (input)="filterLoans()">
        </div>
        <div class="col-md-6">
          <select class="form-control" [(ngModel)]="statusFilter" (change)="filterLoans()">
            <option value="">All Status</option>
            <option value="BORROWED">Borrowed</option>
            <option value="RETURNED">Returned</option>
            <option value="LATE">Late</option>
          </select>
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="text-center py-4">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading loans...</p>
      </div>

      <!-- Loans Table -->
      <div *ngIf="!isLoading" class="card">
        <div class="card-header">
          <h5 class="mb-0">Loans List ({{ filteredLoans.length }} loans)</h5>
        </div>
        <div class="card-body">
          <div *ngIf="filteredLoans.length === 0" class="text-center py-4">
            <i class="bi bi-journal-bookmark-fill display-4 text-muted"></i>
            <h5 class="text-muted mt-3">No loans found</h5>
            <p class="text-muted">{{ searchTerm || statusFilter ? 'No loans match your criteria.' : 'No books have been issued yet!' }}</p>
            <button class="btn btn-primary" (click)="openAddForm()">Issue First Book</button>
          </div>

          <div *ngIf="filteredLoans.length > 0" class="table-responsive">
            <table class="table table-hover">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Book</th>
                  <th>Member</th>
                  <th>Loan Date</th>
                  <th>Due Date</th>
                  <th>Return Date</th>
                  <th>Status</th>
                  <th>Days Left</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let loan of filteredLoans; let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>
                    <strong>{{ loan.book && loan.book.title ? loan.book.title : 'Unknown Book' }}</strong>
                    <br><small class="text-muted">by {{ loan.book && loan.book.author ? loan.book.author : 'Unknown Author' }}</small>
                  </td>
                  <td>
                    <strong>{{ loan.member && loan.member.name ? loan.member.name : 'Unknown Member' }}</strong>
                    <br><small class="text-muted">{{ loan.member && loan.member.email ? loan.member.email : 'No email' }}</small>
                  </td>
                  <td>{{ loan.loanDate | date:'shortDate' }}</td>
                  <td>{{ loan.dueDate | date:'shortDate' }}</td>
                  <td>
                    <span *ngIf="loan.returnDate">{{ loan.returnDate | date:'shortDate' }}</span>
                    <span *ngIf="!loan.returnDate" class="text-muted">Not returned</span>
                  </td>
                  <td>
                    <span class="badge" [ngClass]="getStatusClass(loan.status)">
                      {{ loan.status }}
                    </span>
                  </td>
                  <td>
                    <span *ngIf="loan.status === 'BORROWED'" [ngClass]="getDaysLeftClass(loan)">
                      {{ getDaysLeft(loan) }}
                    </span>
                    <span *ngIf="loan.status !== 'BORROWED'" class="text-muted">-</span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button *ngIf="loan.status === 'BORROWED'" 
                              class="btn btn-outline-success" 
                              (click)="returnBook(loan)" 
                              title="Return Book">
                        <i class="bi bi-check-circle"></i> Return
                      </button>
                      <button class="btn btn-outline-danger" 
                              (click)="deleteLoan(loan)" 
                              title="Delete Loan Record">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Add Loan Form Modal -->
      <div *ngIf="showForm" class="modal d-block" style="background-color: rgba(0,0,0,0.5);">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Issue New Book</h5>
              <button type="button" class="btn-close" (click)="closeForm()"></button>
            </div>
            <div class="modal-body">
              <form (ngSubmit)="saveLoan()">
                <div class="mb-3">
                  <label class="form-label">Book *</label>
                  <select class="form-control" [(ngModel)]="newLoan.bookId" name="bookId" required>
                    <option value="">Select a book</option>
                    <option *ngFor="let book of availableBooks" [value]="book.id">
                      {{ book.title }} by {{ book.author }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Member *</label>
                  <select class="form-control" [(ngModel)]="newLoan.memberId" name="memberId" required>
                    <option value="">Select a member</option>
                    <option *ngFor="let member of members" [value]="member.id">
                      {{ member.name }} ({{ member.email }})
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Due Date *</label>
                  <input type="date" class="form-control" [(ngModel)]="dueDateString" 
                         name="dueDate" required [min]="minDate">
                </div>
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-secondary me-2" (click)="closeForm()">Cancel</button>
                  <button type="submit" class="btn btn-primary" [disabled]="!newLoan.bookId || !newLoan.memberId || !dueDateString || isSubmitting">
                    <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                    Issue Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Error/Success Messages -->
      <div *ngIf="message" class="alert" [ngClass]="messageType === 'success' ? 'alert-success' : 'alert-danger'" class="mt-3">
        <i class="bi" [ngClass]="messageType === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'"></i>
        {{ message }}
      </div>
    </div>
  `,
  styles: [`
    .table th {
      border-top: none;
    }
    .btn-group-sm > .btn {
      padding: 0.25rem 0.5rem;
    }
    .modal {
      z-index: 1050;
    }
    .badge {
      font-size: 0.8em;
    }
    .text-danger {
      font-weight: bold;
    }
    .text-warning {
      font-weight: bold;
    }
  `]
})
export class LoanListComponent implements OnInit {
  loans: Loan[] = [];
  filteredLoans: Loan[] = [];
  availableBooks: Book[] = [];
  members: Member[] = [];
  newLoan = { bookId: '', memberId: '' };
  showForm = false;
  isLoading = false;
  isSubmitting = false;
  searchTerm = '';
  statusFilter = '';
  message = '';
  messageType: 'success' | 'error' = 'success';
  dueDateString = '';
  minDate = '';

  constructor(
    private loanService: LoanService,
    private bookService: BookService,
    private memberService: MemberService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setMinDate();
    this.loadLoans();
    this.loadMembers();
    this.loadAvailableBooks();
  }

  setMinDate() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    // Set default due date to 14 days from today
    const defaultDue = new Date();
    defaultDue.setDate(today.getDate() + 14);
    this.dueDateString = defaultDue.toISOString().split('T')[0];
  }

  loadLoans() {
    this.isLoading = true;
    this.loanService.getAllLoans().subscribe({
      next: (loans) => {
        this.loans = loans;
        this.filterLoans();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading loans:', error);
        this.showMessage('Failed to load loans. Please try again.', 'error');
        this.isLoading = false;
      }
    });
  }

  loadAvailableBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.availableBooks = books.filter(book => book.status !== 'ISSUED');
      },
      error: (error) => {
        console.error('Error loading books:', error);
      }
    });
  }

  loadMembers() {
    this.memberService.getAllMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
      error: (error) => {
        console.error('Error loading members:', error);
      }
    });
  }

  filterLoans() {
    this.filteredLoans = this.loans.filter(loan => {
      const bookTitle = loan.book && loan.book.title ? loan.book.title.toLowerCase() : '';
      const memberName = loan.member && loan.member.name ? loan.member.name.toLowerCase() : '';
      
      const matchesSearch = !this.searchTerm || 
        bookTitle.includes(this.searchTerm.toLowerCase()) ||
        memberName.includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.statusFilter || loan.status === this.statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }

  openAddForm() {
    this.newLoan = { bookId: '', memberId: '' };
    this.setMinDate();
    this.showForm = true;
    this.clearMessage();
  }

  closeForm() {
    this.showForm = false;
    this.newLoan = { bookId: '', memberId: '' };
    this.clearMessage();
  }

  saveLoan() {
    if (!this.newLoan.bookId || !this.newLoan.memberId || !this.dueDateString) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }

    this.isSubmitting = true;

    const loanData = {
      bookId: parseInt(this.newLoan.bookId),
      memberId: parseInt(this.newLoan.memberId),
      dueDate: this.dueDateString
    };

    this.loanService.createLoan(loanData).subscribe({
      next: (loan) => {
        this.showMessage('Book issued successfully!', 'success');
        this.closeForm();
        this.loadLoans();
        this.loadAvailableBooks(); // Refresh available books
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error issuing book:', error);
        this.showMessage('Failed to issue book. Please try again.', 'error');
        this.isSubmitting = false;
      }
    });
  }

  returnBook(loan: Loan) {
    const bookTitle = loan.book && loan.book.title ? loan.book.title : 'this book';
    const memberName = loan.member && loan.member.name ? loan.member.name : 'this member';
    if (confirm(`Return "${bookTitle}" borrowed by ${memberName}?`)) {
      this.loanService.returnBook(loan.id!).subscribe({
        next: (returnedLoan) => {
          this.showMessage('Book returned successfully!', 'success');
          this.loadLoans();
          this.loadAvailableBooks(); // Refresh available books
        },
        error: (error) => {
          console.error('Error returning book:', error);
          this.showMessage('Failed to return book. Please try again.', 'error');
        }
      });
    }
  }

  deleteLoan(loan: Loan) {
    const bookTitle = loan.book && loan.book.title ? loan.book.title : 'this book';
    if (confirm(`Delete loan record for "${bookTitle}"?`)) {
      this.loanService.deleteLoan(loan.id!).subscribe({
        next: () => {
          this.showMessage('Loan record deleted successfully!', 'success');
          this.loadLoans();
          this.loadAvailableBooks(); // Refresh available books
        },
        error: (error) => {
          console.error('Error deleting loan:', error);
          this.showMessage('Failed to delete loan record. Please try again.', 'error');
        }
      });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'BORROWED': return 'bg-primary';
      case 'RETURNED': return 'bg-success';
      case 'LATE': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getDaysLeft(loan: Loan): string {
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return `${Math.abs(diffDays)} days overdue`;
    } else if (diffDays === 0) {
      return 'Due today';
    } else {
      return `${diffDays} days left`;
    }
  }

  getDaysLeftClass(loan: Loan): string {
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return 'text-danger';
    } else if (diffDays <= 3) {
      return 'text-warning';
    } else {
      return 'text-success';
    }
  }

  showMessage(message: string, type: 'success' | 'error') {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }

  clearMessage() {
    this.message = '';
  }
}
