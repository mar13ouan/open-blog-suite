import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';

import { BlogService } from './services/blog.service';

const appRoute: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/view/:id', component: PostListItemComponent },
  { path: 'posts/new', component: PostFormComponent },
  { path: '', redirectTo: 'posts',pathMatch: 'full' },
  { path: '**', component: PostListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
