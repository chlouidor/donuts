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
    this.userEmail = localStorage.getItem('currentUser');
    this.isAuthenticated = !!this.userEmail;

    if (!this.isAuthenticated) {
      this.navCtrl.navigateRoot('/login');
    } else {
      this.userName = this.userEmail ? this.userEmail.split('@')[0] : 'Nombre de Usuario';
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.navCtrl.navigateRoot('/login');
  }

  goToMenu() {
    this.navCtrl.navigateRoot('/index');
  }

  goToChangePassword() {
    this.navCtrl.navigateForward('/cambiar-clave'); // Reemplaza '/cambiar-clave' con la ruta de tu página de cambiar contraseña
  }

  goToRecoverPassword() {
    this.navCtrl.navigateForward('/recuperar-clave'); // Reemplaza '/recuperar-clave' con la ruta de tu página de recuperar contraseña
  }

  editProfile() {
    // Aquí puedes redirigir a la página de modificación del perfil
    this.navCtrl.navigateForward('/modificar-perfil'); // Asegúrate de que esta ruta sea correcta
  }
}
