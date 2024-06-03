import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private apiUrl = 'http://localhost:8080/tags'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getTags(): Observable<{ tag: string, count: number }[]> {
    return this.http.get<{ tag: string, count: number }[]>(this.apiUrl);
  }
}
