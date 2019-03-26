import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  PostForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.PostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required]]
    });
  }

  onSavePost() {
    const title = this.PostForm.get('title').value;
    const content = this.PostForm.get('content').value;
    const newPost = new Post(title, content);
    this.blogService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
