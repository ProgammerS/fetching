import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsHeadlines: string[] = []; // Array to store news headlines

  ngOnInit(): void {
    // Example news headlines
    this.newsHeadlines = [
      'Breaking News: News One',
      'Sports News: News Two',
      'Technology News: News Three',
      'Health News: News Four',
      'Environment News: News Five',
    ];
  }
}
