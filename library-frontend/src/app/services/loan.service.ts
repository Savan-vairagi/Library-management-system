import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from './book.service';
import { Member } from './member.service';

export interface Loan {
  id?: number;
  book: Book;
  member: Member;
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: string;
}

export interface LoanRequest {
  bookId: number;
  memberId: number;
  dueDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = '/api/loans';

  constructor(private http: HttpClient) {}

  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLoanById(id: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createLoan(loanData: LoanRequest): Observable<Loan> {
    return this.http.post<Loan>(this.apiUrl, loanData)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrowBook(bookId: number, memberId: number): Observable<Loan> {
    const params = new HttpParams()
      .set('bookId', bookId.toString())
      .set('memberId', memberId.toString());

    return this.http.post<Loan>(`${this.apiUrl}/borrow`, null, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  returnBook(loanId: number): Observable<Loan> {
    return this.http.put<Loan>(`${this.apiUrl}/${loanId}/return`, {})
      .pipe(
        catchError(this.handleError)
      );
  }

  updateLoan(id: number, loan: any): Observable<Loan> {
    return this.http.put<Loan>(`${this.apiUrl}/${id}`, loan)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteLoan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Loan service error:', error);
    let errorMessage = 'An error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(() => errorMessage);
  }
}
