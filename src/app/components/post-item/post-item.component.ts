import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post)
    this.post = this.post.data
  }

}
