import { Component, OnInit } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-selected',
  templateUrl: './blog-selected.component.html',
  styleUrls: ['./blog-selected.component.scss']
})
export class BlogSelectedComponent implements OnInit {
  blogs: BlogRepresentation[] = [];
  keyword : String = "Asthme";
  thread: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.thread = navigation?.extras?.state?.['thread'];
  }

  ngOnInit(): void {
    if (!this.thread) {
      console.error('No thread data found');
    }
  }
}