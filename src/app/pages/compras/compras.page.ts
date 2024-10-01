import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  Imagen: string = '';
  Nombre: string = '';
  Precio: number = 0; // Cambia a tipo número para facilitar cálculos
  cantidadSeleccionada: number = 1;
  cantidades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router, private activaterouter: ActivatedRoute) {
    this.activaterouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.Nombre = this.router.getCurrentNavigation()?.extras.state?.['nom'];
        this.Precio = +this.router.getCurrentNavigation()?.extras.state?.['pre']; // Convierte a número
        this.Imagen = this.router.getCurrentNavigation()?.extras.state?.['imag'];
      }
    });
  }
  
  confirmarPago() {
    const total = (this.Precio * this.cantidadSeleccionada).toFixed(3); // Redondea a 3 decimales
    let navigationExtras = {
      state: {
        nom: this.Nombre,
        pre: parseFloat(total), // Envía el total calculado como número
        imag: this.Imagen
      }
    };
    this.router.navigate(['/confirmacion-pag'], navigationExtras);
  }

  ngOnInit() {}
}

