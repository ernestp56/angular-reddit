import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import PostItemInterface from '../interfaces/post-item.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  cards: PostItemInterface[] = [];
  isLoading = false;
  loadedAll = false;
  isFirstLoad = true;

  posts: any = [];
  before?: string | null = '';
  after?: string | null = '';
  limit = '10';
  count = '';
  permalink: string | null = null;
  showThread = false;
  subreddit = 'photography';
  @Output() disabled = new EventEmitter<boolean>();

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.callService(null, null);
  }

  onChangeLimit(): void {
    this.callService(null, this.after);
  }

  fetchBefore(): void {
    this.callService(this.before, null);
  }

  fetchAfter(): void {
    this.callService(null, this.after);
  }

  callService(before: string | null, after: string | null): void {
    this.postService.getData(this.subreddit, this.limit, before, after, this.count).subscribe(response => {
      if (response.length) {
        this.posts.push(...response);
        // this.cards.push(...res);
      } else {
        this.setBeforeAfter(response.data.before, response.data.after);
        this.setCount(response.data.children.length);
        this.loadedAll = true;
      }
      this.isLoading = false;
      this.isFirstLoad = false;
    },
    err => console.log(alert(err.message)),
    );
  }

  detectBottom(): void {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.loadedAll) {
        this.fetchAfter();
      }
    }
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
