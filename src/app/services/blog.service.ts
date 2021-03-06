import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BlogService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);

  }


  saveSinglePost(post) {
    post = this.posts.map((postmap) => {
      if (postmap.id == post.id) {
        return postmap = post;
      }
    });
    this.savePosts();
    this.emitPosts();
    console.log(post);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts')
          .child('id').equalTo(id).once('value', (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          });
      });

  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    console.log(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {

    const postIndexToRemove = this.posts.findIndex(
      (postmap, i) => {
        if (postmap.id === post.id) {
          return true;
        }
      });

      this.posts.splice(postIndexToRemove,1);
    this.savePosts();
    this.emitPosts();
  }
  constructor() {
    this.getPosts();
  }

}
