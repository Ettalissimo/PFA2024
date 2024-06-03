import { Component } from '@angular/core';
import { BlogService } from '../services/api/blogs/blog.service';
import { catchError, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { SearchService } from '../services/api/searchs/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  keyword: string = '';
  results$: Observable<string[]>;
  private resultClick$ = new Subject<string>();
  private links: string[] = [];
  private titles: string[] = [];

  constructor(private searchService: SearchService) {
    this.results$ = new Observable<string[]>();

    // Handle result clicks in a reactive way
    this.resultClick$.pipe(
      switchMap(result => this.searchService.sendResult(result).pipe(
        tap(response => console.log('Result sent successfully:', response)),
        catchError(error => {
          console.error('Error sending result:', error);
          return of(null);
        })
      ))
    ).subscribe();
  }

  onSearch(): void {
    this.results$ = this.searchService.search(this.keyword);
  }

  onResultClick(result: string): void {
    this.resultClick$.next(result);
  }

}
