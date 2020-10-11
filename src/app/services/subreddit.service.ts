import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  subredditUrl:string = 'https://www.reddit.com/best.json';
  subredditLimit = '?limit=25'

  constructor(private http:HttpClient) { }

  getData(limit?, before?, after?):Observable<any> {
    return this.http.get<any>(this.subredditUrl + (limit ? "?limit=" + limit : this.subredditLimit));
  }
}
