import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  baseUrl = 'https://www.reddit.com';

  constructor(private http: HttpClient) { }

  getData(permalink: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + permalink + '.json');
  }
}
