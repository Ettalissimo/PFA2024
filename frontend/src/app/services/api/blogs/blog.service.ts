import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { BlogRepresentation } from '../models/blog-representation';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/blogs';  // just to test

  constructor(
    private http: HttpClient
  ) { }

  
  getAllBlogs(){
    const BlogsUrl = this.baseUrl;
    return this.http.get<Array<BlogRepresentation>>(BlogsUrl);
  }

  createBlog(product: BlogRepresentation) {
    const BlogsUrl = `${this.baseUrl}`;
    return this.http.post<BlogRepresentation>(BlogsUrl, product);
  }

}