import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];
  post: Post;

  constructor() {

    this.arrPosts = [
      {
        titulo: "Pecadoooooor",
        texto: "Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.",
        autor: "Chiquito de la calzada",
        imagen: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/11/10/15103273726306.jpg',
        fecha: "2023-06-20",
        categoria: "ciencia"
      },
      {
        titulo: "Consecteur",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam blanditiis rem recusandae deserunt error facere, natus sit aut reiciendis id! Dolores suscipit praesentium ad, nesciunt commodi laboriosam ea placeat?",
        autor: "Cicero",
        imagen: 'https://www.thoughtco.com/thmb/TueKYGOO7PzDE9pVrXBdOTzNhyQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cicero_Rome_Palace_of_Justice-9a15cb9d2a0e4d0a9d0cf2786629dd1f.jpg',
        fecha: "2023-06-21",
        categoria: "deporte"
      },
      {
        titulo: "El mercado laboral está regulinchi",
        texto: "De aquí a la cola del INEM, Con suerte una empresa en Bangladesh nos hace un outsourcing bien rico. Aporreo el teclado como un mono con toda la zorra que tengo. Eternal becario, suicídenme. Vamos directos al paro, a programar debajo de un puente robando la luz de las farolas. Primo, dame algo suelto que este servidor no se paga solo.",
        autor: "Un pobre ser",
        imagen: 'https://3.bp.blogspot.com/-Hfd9a__mw-I/UgvpOFSXM0I/AAAAAAAAx5M/ktGT0B93b0k/s640/Vagabundo.jpg',
        fecha: "2023-06-22",
        categoria: "politica"
      }
    ];
    this.post = { titulo: '', texto: '', autor: '', imagen: '', fecha: '', categoria: '' };
  }

  getAll(): Post[] {
    let posts = [];
    for (let post of this.arrPosts) {
      posts.push(post);
    }
    return posts;
  }

  getByCategory(category: string): Post[] {
    let arrCategory = [];
    for (let post of this.arrPosts) {
      if (post.categoria === category) {
        arrCategory.push(post);
      }
    }
    return arrCategory;
  }

}

