import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  posts = [
    {
      title: 'mon post1',
      content: 'du blabllblblbblablabl',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'mon post12',
      content: 'du blabllblblbblablabl',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'mon post13',
      content: 'du blabllblblbblablabl',
      loveIts: -2,
      created_at: new Date()
    }];
  constuctor() {

  }

  ngOnInit() {

  }

}
