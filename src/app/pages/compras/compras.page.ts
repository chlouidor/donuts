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
  Precio: string = '';

  constructor(private router: Router, private activaterouter: ActivatedRoute) {
    this.activaterouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.Nombre = this.router.getCurrentNavigation()?.extras.state?.['nom'];
        this.Precio = this.router.getCurrentNavigation()?.extras.state?.['pre'];
        this.Imagen = this.router.getCurrentNavigation()?.extras.state?.['imag'];
      }
    });
  }
  
  confirmarPago() {
    let navigationExtras = {
      state: {
        nom: this.Nombre,
        pre: this.Precio,
        imag: this.Imagen
      }
    };
    this.router.navigate(['/confirmacion-pag'], navigationExtras);
  }

  
  ngOnInit() {}
}
