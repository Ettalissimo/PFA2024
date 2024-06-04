import { Component, Input } from '@angular/core';
import { BlogRepresentation } from '../services/api/models/blog-representation';
import { BlogService } from '../services/api/blogs/blog.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent {
  blog: any = {
    idBlog: '',
    title: '',
    pathologie: {
      idPathologie: '',
      name: '',
      cause: '',
      symptoms: '',
      treatment: '',
      nbrSearch: 0
    },
    tags: ['Acne'],
    upvotes: 0,
    downvotes: 0,
    postTime: new Date().toISOString(),
    user: {
      idUser: '',
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      role: ''
    }
  };

  constructor(
    private service : BlogService,
    private router: Router){

    }


  
  submitBlog_(){
    console.log("it works");
    this.service.createBlog(this.blog)
      .subscribe({
        next: (result) =>{
          this.router.navigate(['blogs']);
        }
      });
  }




  resetForm() {
    this.blog = {
      idBlog: '',
      title: '',
      pathologie: {
        idPathologie: '',
        name: '',
        cause: '',
        symptoms: '',
        treatment: '',
        nbrSearch: 0
      },
      tags: ['Acne'],
      upvotes: 0,
      downvotes: 0,
      postTime: new Date().toISOString(),
      user: {
        idUser: '',
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
        role: ''
      }
    };
  }

  submitBlog() {
    this.service.submitBlog(this.blog)
      .pipe(
        catchError(error => {
          console.error('Error submitting blog', error);
          return of(null); // Return a safe value or handle the error appropriately
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Blog submitted successfully', response);
          this.router.navigate(['blogs']); // Navigate to the blogs page
        }
      });
  }

}