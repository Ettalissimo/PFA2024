import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BlogRepresentation } from '../models/blog-representation';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private apiUrl = 'http://localhost:8080/topBlogs'; // Replace with your API URL
  private baseApiUrl = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getTags(): Observable<{ tag: string, count: number }[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => 
        response.map(tagObj => {
          const tag = Object.keys(tagObj)[0];
          return { tag, count: tagObj[tag] };
        })
      )
    );
  }

  getBlogsByTag(tag: string): Observable<BlogRepresentation[]> {
    return this.http.get<BlogRepresentation[]>(`${this.baseApiUrl}/blogs/${tag}`);
  }
}