import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() score: number;
  @Input() author: string;
  @Input() subreddit: string;
  @Input() title: string;
  @Input() selftext: string;
  @Input() thumbnail: string;
  @Input() created: number;
  @Input() numComments: number;
  @Input() link: string;
  @Output() permalink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getPermalink(): void {
    this.permalink.emit(this.link);
  }

}
