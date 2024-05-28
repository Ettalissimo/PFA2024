import { Component, Input } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  
  @Input()
  blog: BlogRepresentation = {};

}
