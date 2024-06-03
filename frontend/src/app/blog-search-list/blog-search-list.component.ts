import { Component } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';
import { SearchService } from '../services/api/searchs/search.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-blog-search-list',
  templateUrl: './blog-search-list.component.html',
  styleUrls: ['./blog-search-list.component.scss']
})
export class BlogSearchListComponent {

  threads : BlogRepresentation;

  keyword: string = '';
  results$: Observable<string[]>;

  constructor(private searchService: SearchService) { }

  onSearch(): void {
    this.results$ = this.searchService.search(this.keyword).pipe(
      map(results => results || [])
    );
  }
}
