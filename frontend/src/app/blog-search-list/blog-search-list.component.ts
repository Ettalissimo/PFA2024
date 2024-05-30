import { Component } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';

@Component({
  selector: 'app-blog-search-list',
  templateUrl: './blog-search-list.component.html',
  styleUrls: ['./blog-search-list.component.scss']
})
export class BlogSearchListComponent {

  threads : BlogRepresentation;
}
