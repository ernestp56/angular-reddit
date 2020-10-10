import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service'

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {
  data: any = {};
  limit: number = 3;

  constructor(private postService:SubredditService) { }

  ngOnInit(): void {
    this.postService.getData().subscribe(response => {
      this.data = response.data;
      console.log(this.data)
    });
  }

  onChangeLimit(): void {
    this.postService.getData(this.limit).subscribe(response => {
      this.data = response.data;
      console.log(this.data)
    });

  }

}
