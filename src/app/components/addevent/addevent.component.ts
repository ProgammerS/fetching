import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addevent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css'],
})
export class AddeventComponent {
  addEventForm: FormGroup; // Form group for the add event form
  isSubmitting = false; // Flag to indicate submission state
  successMessage: string | null = null; // Success message
  errorMessage: string | null = null; // Error message

  constructor(private fb: FormBuilder, private postService: PostService) {
    // Initialize the reactive form
    this.addEventForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      detail: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', [Validators.required]],
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.addEventForm.valid) {
      this.isSubmitting = true; // Set submission state
      this.successMessage = null;
      this.errorMessage = null;

      this.postService.addEvent(this.addEventForm.value).subscribe(
        (response) => {
          this.successMessage = 'Event added successfully!';
          this.isSubmitting = false;
          this.addEventForm.reset(); // Reset the form
        },
        (error) => {
          this.errorMessage = 'Failed to add event. Please try again.';
          this.isSubmitting = false;
          console.error(error);
        }
      );
    }
  }
}
