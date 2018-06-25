import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onIncrementLoveIts() {
    return this.post.loveIts++;
  }

  onDecrementLoveIts() {
    return this.post.loveIts--;
  }
 /* getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'yellow';
    }
  }*/
}
