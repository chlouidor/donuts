import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonaService } from '../dona.service';

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

  constructor(private router: Router, private donaService: DonaService) {}

  agregarDona() {
    this.donaService.addDona(this.nuevaDona);
    this.router.navigate(['/admin']);
  }
}
