import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userName: string | null = '';
  userEmail: string | null = '';
  isAuthenticated: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Verificar si el usuario está autenticado
    this.userEmail = localStorage.getItem('currentUser');
    this.isAuthenticated = !!this.userEmail; // Verifica si hay un usuario autenticado

    if (!this.isAuthenticated) {
      // Redirigir al usuario a la página de inicio de sesión si no está autenticado
      this.navCtrl.navigateRoot('/login'); // Cambia '/login' por la ruta de tu página de inicio de sesión
    } else {
      this.userName = this.userEmail ? this.userEmail.split('@')[0] : 'Nombre de Usuario';
    }
  }

  logout() {
    // Eliminar la información del usuario de Local Storage
    localStorage.removeItem('currentUser');
    // Redirigir al usuario a la página de inicio de sesión después de cerrar sesión
    this.navCtrl.navigateRoot('/login'); // Cambia '/login' por la ruta de tu página de inicio de sesión
  }

  goToLogin() {
    // Redirigir al usuario a la página de inicio de sesión
    this.navCtrl.navigateRoot('/login'); // Cambia '/login' por la ruta de tu página de inicio de sesión
  }

  goToMenu() {
    // Redirigir al usuario al menú principal
    this.navCtrl.navigateRoot('/index'); // Cambia '/index' por la ruta de tu menú principal
  }
}
