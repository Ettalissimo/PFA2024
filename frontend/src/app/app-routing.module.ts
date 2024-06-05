import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import { BlogsComponent } from './blogs/blogs.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TagsBoxComponent } from './tags-box/tags-box.component';
import { BlogsTagComponent } from './blogs-tag/blogs-tag.component';
import { BlogSelectedComponent } from './blog-selected/blog-selected.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AboutComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  },
  {
    path: 'new-blog',
    component: NewBlogComponent
  },
  {
    path: 'myprofile',
    component: MyProfileComponent
  },
  {
    path: 'tags/:tag',
    component: BlogsTagComponent
  },
  {
    path: 'blog-selected/:keyword',
    component: BlogSelectedComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
