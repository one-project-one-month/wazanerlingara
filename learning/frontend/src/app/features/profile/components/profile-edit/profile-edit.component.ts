import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from '../../services/profile.service';
import { User } from '../../models/profile.model';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        const user = response.data || response;
        this.profileForm = this.fb.group({
          username: [user.username],
          email: [user.email],
          firstName: [user.firstName || ''],
          lastName: [user.lastName || ''],
          bio: [user.bio || ''],
          avatar: [user.avatar || '']
        });
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      }
    });
  }

  onSubmit() {
    if (this.profileForm && this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.value).subscribe({
        next: (response: any) => {
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          console.error('Error updating profile:', error);
        }
      });
    }
  }
}
