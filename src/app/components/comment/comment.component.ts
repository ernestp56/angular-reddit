import { Component, OnInit, Input } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { MoreCommentsService } from '../../services/more-comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() permalink: string | null = null;
  @Input() comment: any = {};
  replies: any | null = {};
  kind: string;
  id: string;
  extraComments: any;

  constructor(private moreCommentsService: MoreCommentsService) { }

  ngOnInit(): void {
    this.kind = this.comment.kind;
    // console.log(this.comment);
    this.comment = this.comment.data;
    if (this.kind !== 'more') {
      if (this.comment) {
        this.replies = this.comment.replies ? this.comment.replies.data.children : null;
      }
    } else {
      this.replies = null;
    }
  }

  fetchMoreComments(): void {
    // console.log(this.comment);
    this.moreCommentsService.getData(this.permalink, this.comment.id).subscribe(response => {
      // console.log(Object(response[1].data.children).length > 1 ? "more than one" : "one");
      this.extraComments = response[1].data.children[0];
      this.replies = null;
      this.kind = response[1].kind;
    });
  }

}
