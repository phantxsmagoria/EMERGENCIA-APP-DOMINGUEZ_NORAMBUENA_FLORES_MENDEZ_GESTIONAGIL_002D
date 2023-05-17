import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage: string = '';

  constructor(private router: Router, private toastController: ToastController) {
    this.email = '';
    this.password = '';
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
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
  
  login() {
    const emailRegex = /^[A-Za-z0-9]+@duocuc\.cl$/; 
    // duocuc.cl o profesor.duoc.cl 
  
    if (!emailRegex.test(this.email)) {
      this.presentToast('Correo electrónico no válido');
      return;
    }
  
    // Agrega la lógica de autenticación aquí
    // Por ejemplo, puedes utilizar un servicio para verificar las credenciales
  
    if (this.email.endsWith('@duocuc.cl') && this.password === '123456') {
      // Credenciales válidas, redirige a la página principal
      this.router.navigate(['/home']);
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      this.presentToast('Credenciales inválidas');
    }
  }
}