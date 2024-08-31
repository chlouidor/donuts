import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-confirmacion-pag',
  templateUrl: './confirmacion-pag.page.html',
  styleUrls: ['./confirmacion-pag.page.scss'],
})
export class ConfirmacionPagPage implements OnInit {
  Imagen: string = '';
  Nombre: string = '';
  Precio: string = '';

  constructor(private router: Router, private activaterouter: ActivatedRoute) {
    this.activaterouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.Nombre = this.router.getCurrentNavigation()?.extras.state?.['nom'];
        this.Precio = this.router.getCurrentNavigation()?.extras.state?.['pre'] ;
        this.Imagen = this.router.getCurrentNavigation()?.extras.state?.['imag'];
      }
    });
  }


  ngOnInit() {
  }

}
