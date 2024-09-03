import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Verificar si el usuario está autenticado
    this.isAuthenticated = !!localStorage.getItem('currentUser');
  }

  goToLoginOrProfile() {
    if (this.isAuthenticated) {
      this.navCtrl.navigateRoot('/perfil');
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }
}
