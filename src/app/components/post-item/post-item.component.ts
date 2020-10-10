import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/models/Posts'

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Posts

  constructor() { }

  ngOnInit(): void {
  }

}
