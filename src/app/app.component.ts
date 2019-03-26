import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

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
    const config = {
    apiKey: "AIzaSyDfaTQ_T8B9id-FlpAGKTX1Tu-1-xorrUU",
    authDomain: "blog-open.firebaseapp.com",
    databaseURL: "https://blog-open.firebaseio.com",
    projectId: "blog-open",
    storageBucket: "blog-open.appspot.com",
    messagingSenderId: "1020227045996"
    };
    firebase.initializeApp(config);

  }

}
