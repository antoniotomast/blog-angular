import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  posts: Post[];

  constructor() {

    this.posts = []
  }
}
