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
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (this.email === storedEmail && this.password === storedPassword) {
        // Guardar el usuario autenticado en Local Storage
        localStorage.setItem('currentUser', this.email);

        // Mostrar mensaje de sesión iniciada
        const toast = await this.toastController.create({
          message: 'Sesión iniciada correctamente',
          duration: 2000,
          position: 'top'
        });
        await toast.present();

        // Redirigir al perfil después de que el toast desaparezca
        setTimeout(() => {
          this.navCtrl.navigateRoot('/perfil'); // Cambia la ruta según sea necesario
        }, 2000);
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('Por favor, completa los campos correctamente.');
    }
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/index');
  }
}
