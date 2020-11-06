import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  before?: string | null = '';
  after?: string | null = '';
  limit = '10';
  count = '';
  permalink: string | null = null;
  showThread = false;
  subreddit = 'wallstreetbets';
  @Output() disabled = new EventEmitter<boolean>();

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.callService(null, null);
  }

  onChangeLimit(limit): void {
    this.limit = limit;
    this.callService(null, this.before);
  }

  fetchBefore(): void {
    this.callService(this.before, null);
  }

  fetchAfter(): void {
    this.callService(null, this.after);
  }

  callService(before: string | null, after: string | null): void {
    this.postService.getData(this.subreddit, this.limit, before, after, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      this.posts = response.data.children;
    },
    err => console.log(alert(err.message)),
    );
  }

  setBeforeAfter(before: string | null, after: string | null): void {
    this.before = before ? before : 'first';
    this.after = after;
  }

  setCount(count: number): void {
    this.count = count.toString();
  }

  fetchThread(permalink: string): void {
    if (permalink.length > 0) {
      this.permalink = permalink;
      this.showThread = true;
    }
  }

  closeThread(show: boolean): void {
    this.showThread = show;
  }

  passSubreddit(subreddit): void {
    this.subreddit = subreddit;
    this.fetchPosts();
  }

}
