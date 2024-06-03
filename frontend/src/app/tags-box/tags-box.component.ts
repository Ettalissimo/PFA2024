import { Component } from '@angular/core';
import { TagService } from '../services/api/tags/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags-box',
  templateUrl: './tags-box.component.html',
  styleUrls: ['./tags-box.component.scss']
})
export class TagsBoxComponent {
  tags: { tag: string, count: number }[] = [];
  testTag ="Asthme";

  constructor(
    private tagsService: TagService,
    private router: Router) 
    {

    }

  ngOnInit(): void {
    this.tagsService.getTags().subscribe(data => {
      this.tags = data;
    });
  }

  onTagClick(tag: string): void {
    this.router.navigate(['/tags', tag]);  // Replace '/search' with your desired route
  }
}
