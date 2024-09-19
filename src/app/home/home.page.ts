import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DonaService } from '../dona.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listaDona: any[] = [];

  constructor(private router: Router, private donaService: DonaService) {}

  ngOnInit() {
    this.listaDona = this.donaService.getDonas();
  }

  irPagina(index: number) {
    let donaSeleccionada = this.listaDona[index];
    let navigationExtras: NavigationExtras = {
      state: {
        nom: donaSeleccionada.nombre,
        pre: donaSeleccionada.precio,
        imag: donaSeleccionada.imagen
      }
    };
    this.router.navigate(['/compras'], navigationExtras);
  }
}
