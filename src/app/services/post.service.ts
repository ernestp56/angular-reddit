import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl:string = 'https://www.reddit.com/r/technology/.json';
  postsLimit = '?limit=3'

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + this.postsLimit);
  }
}
