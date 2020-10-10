import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/Posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Posts[]

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: "Post One",
        completed: true
      },
      {
        id: 2,
        title: "Post Two",
        completed: true
      },
      {
        id: 3,
        title: "Post Three",
        completed: true
      }
      
    ]
  }

}
