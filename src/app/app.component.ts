import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Añade CommonModule a imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  contador = 0;
  bonus = false;
  tablaPuntuaciones = [
    { nombre: 'Juan', puntuacion: 855 },
    { nombre: 'Pedro', puntuacion: 803 },
    { nombre: 'Luis', puntuacion: 720 },
  ];

  sumar(cantidad: number): void {
    this.contador = this.contador += cantidad;

    // Cuando alcanzamos 10, habilita un botón de bonus
    if (this.contador === 10) {
      this.bonus = true;

      // Timeout de 5 segundos, pasado este tiempo el botón volverá a su estado original
      window.setTimeout(() => {
        this.bonus = false;
      }, 5000);
    }
  }
}
