import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs/Subscription';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  postSubscription: Subscription;

  constructor(private blogService: BlogService, private router: Router) {

  }

  ngOnInit() {
    this.postSubscription = this.blogService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.blogService.emitPosts();
  }

}
