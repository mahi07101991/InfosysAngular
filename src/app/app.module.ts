import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './posts/categories/categories.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { CategoriesListComponent } from './posts/categories/categories-list/categories-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CategoriesComponent,
    PostsListComponent,
    PostItemComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
