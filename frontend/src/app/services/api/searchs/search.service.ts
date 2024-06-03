import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:8080/fetchListBlog';  // Replace with your backend API URL
  private resultApiUrl = 'http://localhost:8080/fetchListBlog';  // Replace with your backend API URL for sending results

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<string[]> {
    return this.http.get<{ title: string[] }>(`${this.apiUrl}/${keyword}`).pipe(
      map(response => response.title || []),
      catchError(this.handleError<string[]>('search', []))
    );
  }

  sendResult(result: string): Observable<any> {
    return this.http.post<any>(this.resultApiUrl, { result }).pipe(
      catchError(this.handleError<any>('sendResult'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

//    return this.http.get<string[]>(`${this.apiUrl}?query=${keyword}`).pipe(

