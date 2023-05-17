import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  errorMessage = ''; // Variable para almacenar los mensajes de error

  constructor(private router: Router, private navCtrl: NavController,private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 600,
      position: 'bottom',
      color: 'dark',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            // Manejar el evento al cerrar el toast si es necesario
          }
        }
      ]
    });
    toast.present();
  }

  async registerUser() {
    // Validar que el nombre de usuario tenga al menos 3 caracteres
    const usernameRegex = /^[a-zA-Z]{3,}$/;
    if (!usernameRegex.test(this.user.username)) {
      this.presentToast('El nombre de usuario debe tener al menos 3 letras y no puede contener números');
      return;
    }

    // Validar el formato del correo electrónico y el dominio
    const emailRegex = /^[A-Za-z0-9]+@(duocuc\.cl|profesor\.duoc\.cl)$/;
    if (!emailRegex.test(this.user.email)) {
      this.presentToast('Correo electrónico no válido');
      return;
    }

    // Validar que la contraseña y la confirmación de contraseña sean iguales
    if (this.user.password !== this.user.confirmPassword) {
      this.presentToast('Las contraseñas no coinciden');
      return;
    }

    // Usuario registrado.
    console.log('Usuario registrado:', this.user);

    // Mostrar Toast de registro exitoso.
    this.presentToast('Registro exitoso');

    // Después de registrar al usuario, puedes redirigirlo a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  volver() {
    this.navCtrl.back();
  }
}



