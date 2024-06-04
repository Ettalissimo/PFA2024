import { Component, OnInit } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';
import { ActivatedRoute } from '@angular/router';
import { TagService } from '../services/api/tags/tag.service';

@Component({
  selector: 'app-blogs-tag',
  templateUrl: './blogs-tag.component.html',
  styleUrls: ['./blogs-tag.component.scss']
})
export class BlogsTagComponent implements OnInit {
  blogs: BlogRepresentation[] = [];
  tag: string = '';

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tag = params['tag'];
      this.fetchBlogsByTag(this.tag);
    });
  }

  fetchBlogsByTag(tag: string): void {
    this.tagService.getBlogsByTag(tag).subscribe(data => {
      this.blogs = data;
    });
  }
}
