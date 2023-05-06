import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email!: string;

  constructor(private router: Router) {
    this.email = '';
  }

  resetPassword() {
    // Agrega la lógica de restablecimiento de contraseña aquí
    // Por ejemplo, puedes utilizar un servicio para enviar un correo electrónico de restablecimiento

    console.log('Enviar enlace de restablecimiento a:', this.email);
  }
}
