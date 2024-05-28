import { Component } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';
import { BlogService } from '../services/api/blogs/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent {
  blog: BlogRepresentation = {} ;

  constructor(
    private service : BlogService,
    private router: Router
  ){

    this.blog = {
      idBlog: '',
      pathologie: {
        idPathologie: '',
        name: '',
        cause: '',
        symptoms: '',
        treatment: '',
        nbrSearch: 0
      },
      tags: [],
      upvotes: 0,
      downvotes: 0,
      postTime: new Date(),
      user: {
        idUser: '6655f1b927550a68d43d6602',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        role: 'admin'
      }
    };
  }
  
  submitBlog(){
    console.log("it works");
    this.service.createBlog(this.blog)
      .subscribe({
        next: (result) =>{
          this.router.navigate(['blogs']);
        }
      });
  }

}