import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaDona: any = [
    {
      id: 1,
      imagen: 'assets/icon/clasica.png',
      nombre: 'Clásica',
      precio: '2.000'
    },
    {
      id: 2,
      imagen: 'assets/icon/vainilla_acoiris.png',
      nombre: 'Vainilla Arcoiris',
      precio: '5.000'
    },
    {
      id: 3,
      imagen: 'assets/icon/choco_arcoiris.png',
      nombre: 'Chocolate Arcoiris',
      precio: '3.000'
    },
    {
      id: 4,
      imagen: 'assets/icon/glaseada.jpg',
      nombre: 'Glaseada',
      precio: '2.000'
    },
    {
      id: 5,
      imagen: 'assets/icon/super8.png',
      nombre: 'Super8',
      precio: '1.200'
    },
    {
      id: 6,
      imagen: 'assets/icon/boston_manjar.png',
      nombre: 'Boston Manjar',
      precio: '1.000'
    },
    {
      id: 7,
      imagen: 'assets/icon/rollo_canela.png',
      nombre: 'Rollo de Canela',
      precio: '2.200'
    }
  ];

  constructor(private router: Router) {}

  irPagina(index: number) {
    let donaSeleccionada = this.listaDona[index];
    let navigationextras: NavigationExtras = {
      state: {
        nom: donaSeleccionada.nombre,
        pre: donaSeleccionada.precio,
        imag: donaSeleccionada.imagen
      }
    };
    this.router.navigate(['/compras'], navigationextras);
  }
}
