import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service';
// import { postItem } from '../post-item/post-item.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any = [];
  limit:number = 3;
  
  constructor(private postService:SubredditService) { }

  ngOnInit(): void {
    this.postService.getData().subscribe(response => {
      this.posts = response.data.children;
      // console.log(this.data)
    });
  }

  onChangeLimit(): void {
    this.postService.getData(this.limit).subscribe(response => {
      this.posts = response.data.children;
    });
  }


}
