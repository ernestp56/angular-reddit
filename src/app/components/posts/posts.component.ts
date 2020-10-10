import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/Posts'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Posts[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

}
