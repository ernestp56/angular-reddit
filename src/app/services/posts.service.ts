import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = 'https://www.reddit.com/';

  constructor(private http: HttpClient) { }

  getData(subreddit: string, limit?: string, before?: string | null, after?: string | null, count?: string): Observable<any> {
    return this.http.get<any>(this.postsUrl + subreddit + '.json' + ('?limit=' + limit)
      + (before ? '&before=' + before : '') + (after ? '&after=' + after : '') + ('&count=' + '555'));
  }
}
