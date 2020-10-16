import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: any;
  @Output() permalink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.post = this.post.data;
  }

  getPermalink(): void {
    this.permalink.emit(this.post.permalink);
  }

}
