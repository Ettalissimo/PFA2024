import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {MyFirstService} from "./services/my-first.service";
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { TagsBoxComponent } from './tags-box/tags-box.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BlogSearchListComponent } from './blog-search-list/blog-search-list.component';
import { SearchComponent } from './search/search.component';
import { BlogsTagComponent } from './blogs-tag/blogs-tag.component';
import { BlogSelectedComponent } from './blog-selected/blog-selected.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    BlogsComponent,
    BlogDetailsComponent,
    TagsBoxComponent,
    NewBlogComponent,
    MyProfileComponent,
    BlogSearchListComponent,
    SearchComponent,
    BlogsTagComponent,
    BlogSelectedComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    MyFirstService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
