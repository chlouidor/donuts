import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {
  changePasswordFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    // Inicializa el formulario con validaciones
    this.changePasswordFormGroup = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
      confirmNewPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  // Validador para comparar la nueva contraseña con la confirmación
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('newPassword')?.value === formGroup.get('confirmNewPassword')?.value
      ? null : { mismatch: true };
  }

  changePassword() {
    if (this.changePasswordFormGroup.valid) {
      // Lógica para cambiar la contraseña
      console.log("Contraseña cambiada:", this.changePasswordFormGroup.value);
      // Aquí iría la llamada a tu servicio para cambiar la contraseña
    }
  }

  goToMenu() {
    this.navCtrl.navigateRoot('/index'); // Redirigir al menú principal
  }
}
