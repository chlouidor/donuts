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
  emailNotFound: boolean = false;
  incorrectPassword: boolean = false;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async login(form: NgForm) {
    // Comprobamos si el formulario es válido
    if (form.valid) {
      // Obtener los valores guardados en el local storage
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      // Validación de si el correo está registrado
      if (this.email !== storedEmail) {
        this.emailNotFound = true; // Mostrar un mensaje si el correo no está registrado
        return;
      } else {
        this.emailNotFound = false; // Resetear el estado del mensaje
      }

      // Validación de la contraseña
      if (this.password !== storedPassword) {
        this.incorrectPassword = true; // Mostrar un mensaje si la contraseña es incorrecta
        return;
      } else {
        this.incorrectPassword = false; // Resetear el estado del mensaje
      }

      // Si las credenciales son correctas, mostrar un mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Inicio de sesión exitoso.',
        duration: 2000,
        position: 'top',
      });
      await toast.present();

      // Redirigir a la página principal
      this.navCtrl.navigateRoot('/home');
    } else {
      // Si el formulario no es válido, mostrar un mensaje de error
      const toast = await this.toastController.create({
        message: 'Por favor completa todos los campos correctamente.',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      await toast.present();
    }
  }

  goToRegister() {
    // Navegar a la página de registro
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    // Navegar a la página principal
    this.navCtrl.navigateRoot('/home');
  }
}
