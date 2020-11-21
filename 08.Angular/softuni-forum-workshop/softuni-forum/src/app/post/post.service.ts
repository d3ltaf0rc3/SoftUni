import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../shared/interfaces/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  posts: IPost;

  constructor(public http: HttpClient) { }

  loadPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://localhost:3000/api/posts?limit=5');
  }
}
