import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonaService {
  private listaDona: any[] = [
    {
      id: 1,
      imagen: 'assets/icon/clasica.png',
      nombre: 'Clásica',
      precio: '2.000',
      descripcion: 'Dona con sabor clasico y una pisca de azucar flor'
    },
    {
      id: 2,
      imagen: 'assets/icon/vainilla_acoiris.png',
      nombre: 'Vainilla Arcoiris',
      precio: '5.000',
      descripcion: 'Dona con cobertura sabor vainilla y grageas de colores'
    },
    {
      id: 3,
      imagen: 'assets/icon/choco_arcoiris.png',
      nombre: 'Chocolate Arcoiris',
      precio: '3.000',
      descripcion:'Dona con cobertura de chocolate y grageas de colores'
    },
    {
      id: 4,
      imagen: 'assets/icon/glaseada.jpg',
      nombre: 'Glaseada',
      precio: '2.000',
      descripcion:'Donas Glaseadas de textura suave y esponjosa'
    },
    {
      id: 5,
      imagen: 'assets/icon/super8.png',
      nombre: 'Super8',
      precio: '1.200',
      descripcion:'Dona con trozos de super8 bañada en vainilla '
    },
    {
      id: 6,
      imagen: 'assets/icon/boston_manjar.png',
      nombre: 'Boston Manjar',
      precio: '1.000',
      descripcion:'Donut con cobertura de chocolate, rellena de manjar blanco'
    },
    {
      id: 7,
      imagen: 'assets/icon/rollo_canela.png',
      nombre: 'Rollo de Canela',
      precio: '2.200',
      descripcion:'Masa enrollada y cortada en discos'
    }
  ];

  getDonas() {
    return [...this.listaDona];
  }

  getDona(id: number) {
    return this.listaDona.find(dona => dona.id === id);
  }

  addDona(dona: any) {
    // Encuentra el ID más alto en la lista actual
    const highestId = this.listaDona.reduce((max, dona) => dona.id > max ? dona.id : max, 0);
    // Asigna el siguiente ID
    dona.id = highestId + 1;
    this.listaDona.push(dona);
  }

  updateDona(updatedDona: any) {
    const index = this.listaDona.findIndex(dona => dona.id === updatedDona.id);
    if (index !== -1) {
      this.listaDona[index] = updatedDona;
    }
  }

  deleteDona(id: number) {
    this.listaDona = this.listaDona.filter(dona => dona.id !== id);
  }
}
