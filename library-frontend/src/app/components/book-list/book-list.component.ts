import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2><i class="bi bi-book"></i> Books Management</h2>
            <button class="btn btn-success" (click)="openAddForm()">
              <i class="bi bi-plus-circle"></i> Add New Book
            </button>
          </div>
        </div>
      </div>

      <!-- Search and Filter -->
      <div class="row mb-3">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Search books..." 
                 [(ngModel)]="searchTerm" (input)="filterBooks()">
        </div>
        <div class="col-md-6">
          <select class="form-control" [(ngModel)]="statusFilter" (change)="filterBooks()">
            <option value="">All Status</option>
            <option value="AVAILABLE">Available</option>
            <option value="ISSUED">Issued</option>
          </select>
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="text-center py-4">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading books...</p>
      </div>

      <!-- Books Table -->
      <div *ngIf="!isLoading" class="card">
        <div class="card-header">
          <h5 class="mb-0">Books List ({{ filteredBooks.length }} books)</h5>
        </div>
        <div class="card-body">
          <div *ngIf="filteredBooks.length === 0" class="text-center py-4">
            <i class="bi bi-book-fill display-4 text-muted"></i>
            <h5 class="text-muted mt-3">No books found</h5>
            <p class="text-muted">{{ searchTerm || statusFilter ? 'No books match your search criteria.' : 'Start by adding your first book!' }}</p>
            <button class="btn btn-primary" (click)="openAddForm()">Add First Book</button>
          </div>

          <div *ngIf="filteredBooks.length > 0" class="table-responsive">
            <table class="table table-hover">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let book of filteredBooks; let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>
                    <strong>{{ book.title }}</strong>
                  </td>
                  <td>{{ book.author }}</td>
                  <td>{{ book.publishedDate | date:'mediumDate' }}</td>
                  <td>
                    <span class="badge" [ngClass]="getStatusClass(book.status)">
                      {{ book.status || 'AVAILABLE' }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button class="btn btn-outline-primary" (click)="editBook(book)" 
                              title="Edit Book">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn btn-outline-danger" (click)="deleteBook(book)" 
                              title="Delete Book" [disabled]="book.status === 'ISSUED'">
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

      <!-- Add/Edit Form Modal -->
      <div *ngIf="showForm" class="modal d-block" style="background-color: rgba(0,0,0,0.5);">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditMode ? 'Edit Book' : 'Add New Book' }}</h5>
              <button type="button" class="btn-close" (click)="closeForm()"></button>
            </div>
            <div class="modal-body">
              <form (ngSubmit)="saveBook()">
                <div class="mb-3">
                  <label class="form-label">Title *</label>
                  <input type="text" class="form-control" [(ngModel)]="currentBook.title" 
                         name="title" required placeholder="Enter book title">
                </div>
                <div class="mb-3">
                  <label class="form-label">Author *</label>
                  <input type="text" class="form-control" [(ngModel)]="currentBook.author" 
                         name="author" required placeholder="Enter author name">
                </div>
                <div class="mb-3">
                  <label class="form-label">Published Date</label>
                  <input type="date" class="form-control" [(ngModel)]="publishedDateString" 
                         name="publishedDate">
                </div>
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-secondary me-2" (click)="closeForm()">Cancel</button>
                  <button type="submit" class="btn btn-primary" [disabled]="!currentBook.title || !currentBook.author || isSubmitting">
                    <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                    {{ isEditMode ? 'Update' : 'Add' }} Book
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
  `]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  currentBook: Book = { title: '', author: '' };
  showForm = false;
  isEditMode = false;
  isLoading = false;
  isSubmitting = false;
  searchTerm = '';
  statusFilter = '';
  message = '';
  messageType: 'success' | 'error' = 'success';
  publishedDateString = '';

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.isLoading = true;
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.filterBooks();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading books:', error);
        this.showMessage('Failed to load books. Please try again.', 'error');
        this.isLoading = false;
      }
    });
  }

  filterBooks() {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = !this.searchTerm || 
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.statusFilter || 
        (book.status || 'AVAILABLE') === this.statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }

  openAddForm() {
    this.currentBook = { title: '', author: '' };
    this.publishedDateString = '';
    this.isEditMode = false;
    this.showForm = true;
    this.clearMessage();
  }

  editBook(book: Book) {
    this.currentBook = { ...book };
    this.publishedDateString = book.publishedDate ? 
      new Date(book.publishedDate).toISOString().split('T')[0] : '';
    this.isEditMode = true;
    this.showForm = true;
    this.clearMessage();
  }

  closeForm() {
    this.showForm = false;
    this.currentBook = { title: '', author: '' };
    this.publishedDateString = '';
    this.clearMessage();
  }

  saveBook() {
    if (!this.currentBook.title || !this.currentBook.author) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }

    this.isSubmitting = true;
    
    // Convert date string to Date object
    if (this.publishedDateString) {
      this.currentBook.publishedDate = new Date(this.publishedDateString);
    }

    const operation = this.isEditMode ? 
      this.bookService.updateBook(this.currentBook.id!, this.currentBook) :
      this.bookService.createBook(this.currentBook);

    operation.subscribe({
      next: (book) => {
        this.showMessage(
          this.isEditMode ? 'Book updated successfully!' : 'Book added successfully!', 
          'success'
        );
        this.closeForm();
        this.loadBooks();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error saving book:', error);
        this.showMessage('Failed to save book. Please try again.', 'error');
        this.isSubmitting = false;
      }
    });
  }

  deleteBook(book: Book) {
    if (book.status === 'ISSUED') {
      this.showMessage('Cannot delete a book that is currently issued.', 'error');
      return;
    }

    if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
      this.bookService.deleteBook(book.id!).subscribe({
        next: () => {
          this.showMessage('Book deleted successfully!', 'success');
          this.loadBooks();
        },
        error: (error) => {
          console.error('Error deleting book:', error);
          this.showMessage('Failed to delete book. Please try again.', 'error');
        }
      });
    }
  }

  getStatusClass(status: string | undefined): string {
    switch (status) {
      case 'AVAILABLE': return 'bg-success';
      case 'ISSUED': return 'bg-warning text-dark';
      default: return 'bg-success';
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
