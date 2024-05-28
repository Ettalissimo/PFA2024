import { Component, OnInit } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';
import { BlogService } from '../services/api/blogs/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  
  blogs: BlogRepresentation[] = [];

  constructor(
    private service: BlogService
  ) {
  }


  ngOnInit(): void {
    this.service.getAllBlogs()
      .subscribe({
        next: (result) => {
          this.blogs = result;
        }
      });

  }

}
