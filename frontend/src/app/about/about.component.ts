import {Component, OnInit} from '@angular/core';
import { BlogService } from '../services/api/blogs/blog.service';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  constructor(
    private service:BlogService
  ){

  }

  // just for test to delete later
  
  ngOnInit(): void{
    this.service.getAllBlogs()
      .subscribe({
        next: (data)=>{
            console.log(data);
        }
      });
  }


}
