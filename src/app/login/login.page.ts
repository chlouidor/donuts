import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async login(form: NgForm) {
    if (form.valid) {
      // Recuperar los datos de Local Storage
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (this.email === storedEmail && this.password === storedPassword) {
        // Mostrar mensaje de sesión iniciada
        const toast = await this.toastController.create({
          message: 'Sesión iniciada correctamente',
          duration: 2000,
          position: 'top'
        });
        await toast.present();

        // Navegar a la página principal después de que el toast desaparezca
        setTimeout(() => {
          this.navCtrl.navigateRoot('/index'); // Asegúrate de que esta sea la ruta correcta
        }, 2000); // Esperar 2 segundos para que el toast se muestre antes de redirigir

      } else {
        // Mostrar un mensaje de error
        alert('Credenciales incorrectas');
      }
    } else {
      alert('Por favor, completa los campos correctamente.');
    }
  }

  goToRegister() {
    // Navegar a la página de registro
    this.navCtrl.navigateForward('/register');
  }

  goToHome() {
    // Navegar a la página principal
    this.navCtrl.navigateRoot('/index'); // Cambia '/home' por la ruta de tu menú principal
  }
}
