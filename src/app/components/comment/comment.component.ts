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
  extraComments: any = {};

  constructor(private moreCommentsService: MoreCommentsService) { }

  ngOnInit(): void {
    this.kind = this.comment.kind;
    this.id = this.comment.data.id;
    this.comment = this.comment.data;
    if (this.kind !== 'more') {
      this.replies = this.comment.replies ? this.comment.replies.data.children : null;
    } else {
      this.replies = null;
    }
  }

  fetchMoreComments(): void {
    this.moreCommentsService.getData(this.permalink, this.id).subscribe(response => {
      this.extraComments = response[1].data.children;
      this.kind = response[1].kind;
    });
  }

}
