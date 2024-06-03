import { Component } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';

@Component({
  selector: 'app-blogs-tag',
  templateUrl: './blogs-tag.component.html',
  styleUrls: ['./blogs-tag.component.scss']
})
export class BlogsTagComponent {

  blogs: BlogRepresentation[] = [];

}
