import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;


  plusLove() {
    this.loveIts++;
    console.log(this.loveIts);

  }
  moinsLove() {

    this.loveIts--;
    console.log(this.loveIts);
  }

  isLoved() {

    return this.loveIts >= 0 ? true : false ;
  }
  
constructor() {



}
ngOnInit() {

}

}
