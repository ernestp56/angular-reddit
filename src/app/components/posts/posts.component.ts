import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any = [];
  before?:string | null = '';
  after?:string | null = '';
  limit:string = '10';
  count:string = '';
  permalink: string | null = null;
  showThread: boolean = false;
  subreddit: string = 'photography'
  @Output() disabled = new EventEmitter<boolean>();
  
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  fetchPosts(): void {
    this.postService.getData(this.subreddit, this.limit).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      this.posts = response.data.children;
    },
    err => console.log(alert("No subreddits found using this name")),
    ); 
  }

  onChangeLimit(): void {
    this.postService.getData(this.subreddit, this.limit, null, this.after, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.posts = response.data.children;
    },
    err => console.log(alert(err.statusText)),
    ); 
  }

  fetchBefore(): void {
    this.postService.getData(this.subreddit, this.limit, this.before, null, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      if (response.data.children.length > 0) {
        this.posts = response.data.children;
      }
    },
    err => console.log(alert(err.statusText)),
    );  
  }

  fetchAfter(): void {
    this.postService.getData(this.subreddit, this.limit, null, this.after, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      this.posts = response.data.children;
    },
    err => console.log(alert(err.statusText)),
    );  
  }

  setBeforeAfter(before: string | null, after: string | null): void {
    this.before = before ? before : "first";
    this.after = after;
  }

  setCount(count: number) {
    this.count = count.toString();
  }

  fetchThread(permalink: string) {
    if (permalink.length > 0) {
      this.permalink = permalink;
      this.showThread = true;
    }
  }

  closeThread(show: boolean) {
    this.showThread = show;
  }

  passSubreddit(subreddit) {
    this.subreddit = subreddit;
    this.fetchPosts();
  }

}
