import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  contador = 0;
  bonus = false;
  disableBtn = false;
  disableBtnNegativo=false;
  resetBtn = false;
  miFormulario: FormGroup;
  
  textClases = {
    warning: false,
    danger: false,
    success: true
  };
  
  textStyle = {
    fontSize: '18px'
  };
  
  picaFlorSrc = "https://www.queanimal.com/wp-content/uploads/2018/04/que-come-el-colibri.jpg";
  tablaPuntuaciones = [
    { nombre: 'Juan', puntuacion: 855 },
    { nombre: 'Pedro', puntuacion: 803 },
    { nombre: 'Luis', puntuacion: 720 },
  ];

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['Valor predeterminado'],
      email: ['ejemplo@correo.com']
    });
  }
  restar(cantidad: number): void {
    if (this.contador > 0) {
      this.contador -= cantidad;
  }

    // Aquí actualizas el estado del botón de restar según el valor del contador
    this.disableBtnNegativo = this.contador <= 0;
}

sumar(cantidad: number): void {
    this.contador += cantidad;

    // Actualizas el estado del botón de restar
    this.disableBtnNegativo = this.contador <= 0;

    this.textClases = {
      warning: this.contador > 75 && this.contador <= 100,
      danger: this.contador > 50 && this.contador <= 75,
      success: this.contador >= 0 && this.contador <= 50
    };

    this.textStyle = {
      fontSize: this.contador > 70 ? '28px' : this.contador > 35 ? '24px' : '20px'
    };

    if (this.contador === 10) {
      this.bonus = true;
      window.setTimeout(() => {
        this.bonus = false;
      }, 5000);
    }

    if (this.contador >= 100) {
      this.disableBtn = true;
    }
}


  
  resetCounter(): void {
    this.contador = 0;
    this.disableBtn = false;
    this.disableBtnNegativo=false;
    this.bonus = false;
    this.textClases = {
      warning: false,
      danger: false,
      success: true
    };
    this.textStyle = {
      fontSize: '20px'
    };
  }

  resetFormulario() {
    this.miFormulario.reset({
      nombre: 'Valor predeterminado',
      email: 'ejemplo@correo.com'
    });
  }
}
