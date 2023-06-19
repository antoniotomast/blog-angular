import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/Post.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];
  post: Post;

  constructor() {

    this.arrPosts = [];
    this.post = { titulo: '', texto: '', autor: '', imagen: '', fecha: '', categoria: '' };
  }

  createPost() {

  }

}
