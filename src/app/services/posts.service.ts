import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl:string = 'https://www.reddit.com/r/technology.json';
  subredditLimit = '10'

  constructor(private http:HttpClient) { }

  getData(limit?: string, before?: string | null, after?: string | null, count?: string):Observable<any> {
    return this.http.get<any>(this.postsUrl + ("?limit=" + limit)
      + (before ? '&before=' + before : '') + (after ? '&after=' + after : '') + ("&count=" + "555"));
  }
}
