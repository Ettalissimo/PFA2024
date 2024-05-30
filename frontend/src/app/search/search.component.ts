import { Component } from '@angular/core';
import { BlogService } from '../services/api/blogs/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  keyword: string = '';
  threads: any[] = [];

  constructor(private blogService: BlogService) {}

  searchThreads() {
    this.blogService.searchThreads(this.keyword).subscribe((data: any) => {
      this.threads = data;
    });
  }
}
