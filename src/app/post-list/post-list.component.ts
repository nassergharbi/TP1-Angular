import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { POSTS } from '../app.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
