import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service'

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
