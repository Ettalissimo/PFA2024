import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../services/api/searchs/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  keyword: string = '';
  results$: Observable<any>;
  threads: any;

  constructor(private searchService: SearchService) {}

  onSearch(): void {
    this.results$ = this.searchService.searchThreads(this.keyword);
    this.results$.subscribe(data => {
      this.threads = data; // Storing the threads to use later when sending the selected index
    });
  }

  onResultClick(index: number): void {
    if (this.threads) {
      this.searchService.sendSelectedThread(index, this.threads).subscribe((response: any) => {
        console.log('Selection sent successfully', response);
      });
    } else {
      console.error('Threads not loaded');
    }
  }
}
