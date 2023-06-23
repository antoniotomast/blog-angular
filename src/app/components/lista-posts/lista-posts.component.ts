import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/Post.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  posts: Post[];

  //servicios
  blogService = inject(ServicioService);



  constructor() {
    this.posts = [];
  }


  ngOnInit() {
    this.posts = this.blogService.getAll();
  }


  onChange($event: any) {
    this.posts = this.blogService.getByCategory2($event.target.value);
  }

}
