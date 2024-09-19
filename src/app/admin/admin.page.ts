import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonaService } from '../dona.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage implements OnInit {
  listaDona: any[]=[];

  constructor(private router: Router, private donaService: DonaService) {
  }

  ngOnInit() {
    this.listaDona = this.donaService.getDonas();
  }

  eliminarDona(index: number) {
    const id = this.listaDona[index].id;
    this.donaService.deleteDona(id);
    this.listaDona = this.donaService.getDonas();
  }

  editarDona(index: number) {
    let donaSeleccionada = this.listaDona[index];
    this.router.navigate(['/editar-dona'], { state: { dona: donaSeleccionada } });
  }

  nuevaDona() {
    this.router.navigate(['/agregar-dona']);
  }
}
