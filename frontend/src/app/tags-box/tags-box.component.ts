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
  topTags: { tag: string, count: number }[] = [];
  toggle:any = 0;
  buttonText:String = "See All";

  constructor(
    private tagsService: TagService,
    private router: Router) 
    {

    }

  ngOnInit(): void {
    this.tagsService.getTags().subscribe(data => {
      this.tags = data;
      this.topTags = data.slice(0,5);
    });
  }

  onTagClick(tag: string): void {
    this.router.navigate(['/tags', tag]);  // Replace '/search' with your desired route
  }

  loadTag():void {
    if(this.toggle==0){
      this.topTags = this.tags;
      this.buttonText = "See Less";
      this.toggle = 1;
    }else{
      this.topTags = this.tags.slice(0,5);
      this.buttonText = "See More";
      this.toggle = 0;
    }
    
  }
}
