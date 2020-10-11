import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  subredditUrl:string = 'https://www.reddit.com/r/technology.json';
  subredditLimit = '10'

  constructor(private http:HttpClient) { }

  getData(limit?: string, before?: string | null, after?: string | null, count?: string):Observable<any> {
    // console.log(this.subredditUrl + (limit ? "?limit=" + limit : "?limit=" + this.subredditLimit)
    // + (before ? '&before=' + before : '') + (after ? '&after=' + after : '') + ('&count=' + this.subredditLimit))
    return this.http.get<any>(this.subredditUrl + (limit ? "?limit=" + limit : "?limit=" + this.subredditLimit)
      + (before ? '&before=' + before : '') + (after ? '&after=' + after : '') + ("&count=" + "555"));
  }
}
