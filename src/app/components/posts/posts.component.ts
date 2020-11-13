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
  subreddit = '';
  busy: boolean;
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

  // fetchBefore(): void {
  //   this.callService(this.before, null);
  // }

  // fetchAfter(): void {
  //   this.callService(null, this.after);
  // }

  onScroll(): void {
    this.busy = true;
    this.postService.getData(this.subreddit, this.limit, null, this.after, this.count).subscribe(response => {
      for (var i = 0; i < response.data.children.length; i++) {
        this.posts.push(response.data.children[i]);
      }
      this.after = "t3_" + response.data.children[response.data.children.length - 1].data.id;
      console.log("test");
      console.log(this.after);
      this.busy = false;
    },
    err => console.log(alert(err.message)),
    );
  }

  callService(before: string | null, after: string | null): void {
    this.postService.getData(this.subreddit, this.limit, before, after, this.count).subscribe(response => {
      this.posts = response.data.children;
      this.after = "t3_" + response.data.children[response.data.children.length - 1].data.id;
      console.log(this.after)
    },
    err => console.log(alert(err.message)),
    );
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
    if (subreddit) {
      this.subreddit = 'r/' + subreddit;
    } else {
      this.subreddit = '';
    }
    this.fetchPosts();
    this.posts = [];
  }

}
