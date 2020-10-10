import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return [
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
