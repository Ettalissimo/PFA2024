import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import { BlogsComponent } from './blogs/blogs.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
