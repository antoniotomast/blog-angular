import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(35)
      ]),
      texto: new FormControl(null, [
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(600)
      ]),
      autor: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      imagen: new FormControl(null),
      fecha: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10)
      ]),
      categoria: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}
