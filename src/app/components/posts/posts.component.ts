import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() disabled = new EventEmitter<boolean>();
  
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getData(this.limit).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      this.posts = response.data.children;
      console.log(this.posts)
    });
  }

  onChangeLimit(): void {
    this.postService.getData(this.limit, null, this.after, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.posts = response.data.children;
    });
  }

  fetchBefore(): void {
    this.postService.getData(this.limit, this.before, null, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      if (response.data.children.length > 0) {
        this.posts = response.data.children;
      }
    });  
  }

  fetchAfter(): void {
    this.postService.getData(this.limit, null, this.after, this.count).subscribe(response => {
      this.setBeforeAfter(response.data.before, response.data.after);
      this.setCount(response.data.children.length);
      this.posts = response.data.children;
    }); 
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
    console.log(this.showThread)
  }

}
