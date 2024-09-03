import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async register(form: NgForm) {
    if (form.valid) {
      // Guardar los datos de usuario en Local Storage
      localStorage.setItem('userEmail', this.email);
      localStorage.setItem('userPassword', this.password);

      // Mostrar un mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Registro exitoso. Ahora puedes iniciar sesión.',
        duration: 2000,
        position: 'top'
      });
      await toast.present();

      // Guardar el email del usuario como el usuario autenticado actual
      localStorage.setItem('currentUser', this.email);

      // Redirigir a la página de inicio de sesión
      this.navCtrl.navigateRoot('/login');
    } else {
      alert('Por favor, completa los campos correctamente.');
    }
  }

  goToHome() {
    // Navegar a la página principal
    this.navCtrl.navigateRoot('/home');
  }
}
