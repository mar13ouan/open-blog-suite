import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {



  @Input() post: Post;


  plusLove() {
    this.post.loveIts++;
    this.onLikeChange(this.post);

    console.log(this.post.loveIts);

  }
  moinsLove() {

    this.post.loveIts--;
    this.onLikeChange(this.post);
    console.log(this.post.loveIts);
  }
  onLikeChange(post) {
    this.blogService.saveSinglePost(post);
  }

  isLoved() {
    return this.post.loveIts >= 0 ? true : false;
  }
  onRemovePost() {
    this.blogService.removePost(this.post);
  }
  constructor(private blogService: BlogService, private router: Router,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    // this.post = new Post('', '');
    // this.blogService.getSinglePost(+this.id).then(
    //   (post: Post) => {
    //     this.post = post;
    //   }
    // );
  }

}
