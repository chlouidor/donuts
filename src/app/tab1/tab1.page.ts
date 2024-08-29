import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre: string = "";
  precio: string = '';
  dona: string = "";

  listaDona: any = [
    {
      id: 1 ,
      nombre: 'Clasica',
      precio:'2.000'
    },
    {
      id: 2,
      nombre: 'Vainilla Alcoiris',
      precio:'5.000'
    },
    {
      id: 3,
      nombre: 'Chocolate Alcoiris',
      precio:'3.000'
    },
    {
      id: 5,
      nombre: 'Glaseada',
      precio:'2.000'
    },
    {
      id: 6,
      nombre: 'Trennsito',
      precio:'1.200'
    },
    {
      id: 7,
      nombre: 'Boston Manjar',
      precio:'1.000'
    },
    {
      id: 8,
      nombre: 'Rollo de Canela',
      precio:'2.200'
    }
  ]

  constructor(private router: Router) {}


  irPagina(){
    //creamos nuestra variable de contexto
    // el nombre de nuestro contexto pude ser lo que deseamos en minuscula, aca le puse el nombe de navigacion
    let navigationextras: NavigationExtras ={
      //la variable state siempre se tiene que llamar asi
      state:{
        nom:this.listaDona.nombe,
        pre: this.listaDona.precio,
        dona:this.listaDona.dona
      }
    }
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/comprar']);
}



}
