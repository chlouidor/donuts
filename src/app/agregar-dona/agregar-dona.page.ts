import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-agregar-dona',
  templateUrl: 'agregar-dona.page.html',
  styleUrls: ['agregar-dona.page.scss'],
})
export class AgregarDonaPage {
  nuevaDona = {
    imagen: '',
    nombre: '',
    precio: '',
    descripcion: ''
  };

  constructor(private router: Router) {}

  agregarDona() {
    const navigationExtras: NavigationExtras = {
      state: {
        nuevaDona: this.nuevaDona
      }
    };
    this.router.navigate(['/home'], navigationExtras);  // Redirige a la página principal (home)
  }
}
