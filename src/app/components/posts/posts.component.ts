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

  callService(before: string | null, after: string | null):void {
    this.postService.getData(this.subreddit, this.limit, before, after, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      this.posts = response.data.children;
    },
    err => console.log(alert(err.message)),
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
