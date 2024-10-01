import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async register(form: NgForm) {
    if (form.valid && this.password === this.confirmPassword) {
      // Guardar los datos de usuario en Local Storage
      localStorage.setItem('username', this.username);
      localStorage.setItem('userEmail', this.email);
      localStorage.setItem('userPassword', this.password);

      // Mostrar un mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Registro exitoso. Ahora puedes iniciar sesión.',
        duration: 2000,
        position: 'top',
      });
      await toast.present();

      // Redirigir a la página de inicio de sesión
      this.navCtrl.navigateRoot('/login');
    } else {
      // Mostrar error si las contraseñas no coinciden
      if (this.password !== this.confirmPassword) {
        const toast = await this.toastController.create({
          message: 'Las contraseñas no coinciden.',
          duration: 2000,
          position: 'top',
        });
        await toast.present();
      } else {
        alert('Por favor, completa los campos correctamente.');
      }
    }
  }

  goToHome() {
    // Navegar a la página principal
    this.navCtrl.navigateRoot('/home');
  }
}
