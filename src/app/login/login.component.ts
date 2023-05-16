import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  login() {
    // Agrega la lógica de autenticación aquí
    // Por ejemplo, puedes utilizar un servicio para verificar las credenciales

    if (this.email === 'usuario@duocuc.com' && this.password === '123456') {
      // Credenciales válidas, redirige a la página principal
      this.router.navigate(['/home']);
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      console.log('Credenciales inválidas');
    }
  }
}

