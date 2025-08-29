import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanFormComponent } from './components/loan-form/loan-form.component';

// Services
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { MemberService } from './services/member.service';
import { LoanService } from './services/loan.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BookListComponent,
    BookFormComponent,
    MemberListComponent,
    MemberFormComponent,
    LoanListComponent,
    LoanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    BookService,
    MemberService,
    LoanService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
