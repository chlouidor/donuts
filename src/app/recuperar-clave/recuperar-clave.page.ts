import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage {
  email: string = '';

  constructor(private navCtrl: NavController) { }

  goToMenu() {
    this.navCtrl.navigateRoot('/index'); // Redirige al menú principal
  }

  recoverPassword(form: any) {
    if (form.valid) {
      // Aquí puedes agregar la lógica para enviar el correo de recuperación
      console.log('Instrucciones de recuperación enviadas a:', this.email);
      // Muestra un mensaje de éxito o redirige a otra página según sea necesario
    }
  }
}
