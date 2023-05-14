import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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

  constructor(private router: Router, private navCtrl: NavController) {}

  registerUser() {
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Usuario registrado:', this.user);
    
    // Después de registrar al usuario, puedes redirigirlo a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
  volver() {
    this.navCtrl.back();
  }
}


