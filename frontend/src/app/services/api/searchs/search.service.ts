import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  searchThreads(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fetchListBlog/${keyword}`);
  }

  sendSelectedThread(index: number, threads: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/fetchedBlog/${index}`,  threads );
  }
}