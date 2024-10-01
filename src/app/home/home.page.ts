import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listaDona: any[] = [];

  constructor(private router: Router, private nativeStorage: NativeStorage) {}

  ngOnInit() {
    // Intentar cargar la lista de donas del almacenamiento local
    this.nativeStorage.getItem('listaDona')
      .then(data => {
        this.listaDona = data || this.defaultDonas();
      })
      .catch(() => {
        // Si no existe en el almacenamiento, cargamos la lista por defecto
        this.listaDona = this.defaultDonas();
        this.guardarDonas(); // Guardar la lista por defecto en Native Storage
      });

    const updatedDona = this.router.getCurrentNavigation()?.extras.state?.['updatedDona'];
    const nuevaDona = this.router.getCurrentNavigation()?.extras.state?.['nuevaDona'];

    if (updatedDona) {
      this.updateDona(updatedDona);
    }

    if (nuevaDona) {
      this.addDona(nuevaDona);
    }
  }

  // Donas por defecto si no existen en almacenamiento
  defaultDonas() {
    return [
      {
        id: 1,
        imagen: 'assets/icon/clasica.png',
        nombre: 'Clásica',
        precio: '2.000',
        descripcion: 'Dona con sabor clásico y una pizca de azúcar flor'
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
        descripcion: 'Dona con cobertura de chocolate y grageas de colores'
      },
      {
        id: 4,
        imagen: 'assets/icon/glaseada.jpg',
        nombre: 'Glaseada',
        precio: '2.000',
        descripcion: 'Donas Glaseadas de textura suave y esponjosa'
      },
      {
        id: 5,
        imagen: 'assets/icon/super8.png',
        nombre: 'Super8',
        precio: '1.200',
        descripcion: 'Dona con trozos de super8 bañada en vainilla'
      }
    ];
  }

  // Método para ir a la página de edición de dona
  irPagina(index: number) {
    let donaSeleccionada = this.listaDona[index];
    let navigationExtras: NavigationExtras = {
      state: {
        dona: donaSeleccionada // Pasar la dona seleccionada a la página de edición
      }
    };
    this.router.navigate(['/editar-dona'], navigationExtras);
  }

  // Método para agregar una nueva dona
  addDona(dona: any) {
    const highestId = this.listaDona.reduce((max, dona) => dona.id > max ? dona.id : max, 0);
    dona.id = highestId + 1;
    this.listaDona.push(dona);
    this.guardarDonas(); // Guardar cambios en Native Storage
  }

  // Método para actualizar una dona existente
  updateDona(updatedDona: any) {
    const index = this.listaDona.findIndex(dona => dona.id === updatedDona.id);
    if (index !== -1) {
      this.listaDona[index] = updatedDona;
      this.guardarDonas(); // Guardar cambios en Native Storage
    }
  }

  // Método para borrar una dona
  deleteDona(id: number) {
    this.listaDona = this.listaDona.filter(dona => dona.id !== id);
    this.guardarDonas(); // Guardar cambios en Native Storage
  }

  // Método para guardar la lista de donas en Native Storage
  guardarDonas() {
    this.nativeStorage.setItem('listaDona', this.listaDona)
      .then(() => console.log('Donas guardadas en almacenamiento local'))
      .catch(error => console.error('Error guardando donas en almacenamiento local', error));
  }
}
