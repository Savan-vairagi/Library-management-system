import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'books/new', component: BookFormComponent, canActivate: [AuthGuard] },
  { path: 'books/edit/:id', component: BookFormComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'members/new', component: MemberFormComponent, canActivate: [AuthGuard] },
  { path: 'members/edit/:id', component: MemberFormComponent, canActivate: [AuthGuard] },
  { path: 'loans', component: LoanListComponent, canActivate: [AuthGuard] },
  { path: 'loans/new', component: LoanFormComponent, canActivate: [AuthGuard] },
  { path: 'loans/edit/:id', component: LoanFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
