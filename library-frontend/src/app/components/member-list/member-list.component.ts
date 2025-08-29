import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService, Member } from '../../services/member.service';

@Component({
  selector: 'app-member-list',
  template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2><i class="bi bi-people"></i> Members Management</h2>
            <button class="btn btn-success" (click)="openAddForm()">
              <i class="bi bi-person-plus"></i> Add New Member
            </button>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="row mb-3">
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="Search members by name or email..." 
                 [(ngModel)]="searchTerm" (input)="filterMembers()">
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="text-center py-4">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading members...</p>
      </div>

      <!-- Members Table -->
      <div *ngIf="!isLoading" class="card">
        <div class="card-header">
          <h5 class="mb-0">Members List ({{ filteredMembers.length }} members)</h5>
        </div>
        <div class="card-body">
          <div *ngIf="filteredMembers.length === 0" class="text-center py-4">
            <i class="bi bi-people-fill display-4 text-muted"></i>
            <h5 class="text-muted mt-3">No members found</h5>
            <p class="text-muted">{{ searchTerm ? 'No members match your search criteria.' : 'Start by adding your first member!' }}</p>
            <button class="btn btn-primary" (click)="openAddForm()">Add First Member</button>
          </div>

          <div *ngIf="filteredMembers.length > 0" class="table-responsive">
            <table class="table table-hover">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let member of filteredMembers; let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>
                    <strong>{{ member.name }}</strong>
                  </td>
                  <td>{{ member.email }}</td>
                  <td>
                    <span *ngFor="let role of member.roles" class="badge bg-secondary me-1">
                      {{ role.name || role }}
                    </span>
                    <span *ngIf="!member.roles || member.roles.length === 0" class="text-muted">No roles</span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button class="btn btn-outline-primary" (click)="editMember(member)" 
                              title="Edit Member">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn btn-outline-danger" (click)="deleteMember(member)" 
                              title="Delete Member">
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
              <h5 class="modal-title">{{ isEditMode ? 'Edit Member' : 'Add New Member' }}</h5>
              <button type="button" class="btn-close" (click)="closeForm()"></button>
            </div>
            <div class="modal-body">
              <form (ngSubmit)="saveMember()">
                <div class="mb-3">
                  <label class="form-label">Name *</label>
                  <input type="text" class="form-control" [(ngModel)]="currentMember.name" 
                         name="name" required placeholder="Enter member name">
                </div>
                <div class="mb-3">
                  <label class="form-label">Email *</label>
                  <input type="email" class="form-control" [(ngModel)]="currentMember.email" 
                         name="email" required placeholder="Enter email address">
                </div>
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-secondary me-2" (click)="closeForm()">Cancel</button>
                  <button type="submit" class="btn btn-primary" [disabled]="!currentMember.name || !currentMember.email || isSubmitting">
                    <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                    {{ isEditMode ? 'Update' : 'Add' }} Member
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
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  filteredMembers: Member[] = [];
  currentMember: Member = { name: '', email: '' };
  showForm = false;
  isEditMode = false;
  isLoading = false;
  isSubmitting = false;
  searchTerm = '';
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.isLoading = true;
    this.memberService.getAllMembers().subscribe({
      next: (members) => {
        this.members = members;
        this.filterMembers();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading members:', error);
        this.showMessage('Failed to load members. Please try again.', 'error');
        this.isLoading = false;
      }
    });
  }

  filterMembers() {
    this.filteredMembers = this.members.filter(member => {
      const matchesSearch = !this.searchTerm || 
        member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesSearch;
    });
  }

  openAddForm() {
    this.currentMember = { name: '', email: '' };
    this.isEditMode = false;
    this.showForm = true;
    this.clearMessage();
  }

  editMember(member: Member) {
    this.currentMember = { ...member };
    this.isEditMode = true;
    this.showForm = true;
    this.clearMessage();
  }

  closeForm() {
    this.showForm = false;
    this.currentMember = { name: '', email: '' };
    this.clearMessage();
  }

  saveMember() {
    if (!this.currentMember.name || !this.currentMember.email) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }

    // Basic email validation
    if (!this.currentMember.email.includes('@')) {
      this.showMessage('Please enter a valid email address.', 'error');
      return;
    }

    this.isSubmitting = true;

    const operation = this.isEditMode ? 
      this.memberService.updateMember(this.currentMember.id!, this.currentMember) :
      this.memberService.createMember(this.currentMember);

    operation.subscribe({
      next: (member) => {
        this.showMessage(
          this.isEditMode ? 'Member updated successfully!' : 'Member added successfully!', 
          'success'
        );
        this.closeForm();
        this.loadMembers();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error saving member:', error);
        this.showMessage('Failed to save member. Please try again.', 'error');
        this.isSubmitting = false;
      }
    });
  }

  deleteMember(member: Member) {
    if (confirm(`Are you sure you want to delete "${member.name}"?`)) {
      this.memberService.deleteMember(member.id!).subscribe({
        next: () => {
          this.showMessage('Member deleted successfully!', 'success');
          this.loadMembers();
        },
        error: (error) => {
          console.error('Error deleting member:', error);
          this.showMessage('Failed to delete member. Please try again.', 'error');
        }
      });
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
