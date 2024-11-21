import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://product-app-74q6.onrender.com/events'; // Base URL for events API

  constructor(private http: HttpClient) {}

  // Fetch all events
  getEvents(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.payload) // Extract payload from response
    );
  }

  // Add a new event
  addEvent(event: { name: string; detail: string; category: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, event);
  }
}
