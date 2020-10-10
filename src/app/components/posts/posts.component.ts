import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[]


  ngOnInit(): void {
  }

}
