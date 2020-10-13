import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any = {};
  replies: any | null = {};

  constructor() { }

  ngOnInit(): void {
    this.comment = this.comment.data;
    this.replies = this.comment.replies.data ? this.comment.replies.data.children : null;
    console.log(this.replies)
  }

}
