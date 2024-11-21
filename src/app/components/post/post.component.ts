import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DatePipe]  
})
export class PostComponent implements OnInit {
  events: any[] = []; // Array to hold events
  isLoading = true; // Flag for loading state
  errorMessage: string | null = null; 

  constructor(private postService: PostService, private datePipe: DatePipe) {} // Inject DatePipe into the constructor

  ngOnInit(): void {
    
    this.postService.getEvents().subscribe(
      (data) => {
        this.events = data; 
        this.isLoading = false; 
      },
      (error) => {
        this.errorMessage = 'Error fetching events'; // Display error message
        this.isLoading = false; 
        console.error(error); 
      }
    );
  }

  
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'medium') || ''; 
  }
}
