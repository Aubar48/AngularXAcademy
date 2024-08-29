import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule], // Añade CommonModule a imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  contador = 0;
  bonus = false;
  disableBtn=false;
  resetBtn=false;
  miFormulario: FormGroup;
  textClases={
    warning: this.contador>75 && this.contador <=100,
    danger:this.contador>50 && this.contador <75,
    success:this.contador >=0 && this.contador<50
  }
  picaFlorSrc="https://www.queanimal.com/wp-content/uploads/2018/04/que-come-el-colibri.jpg";
  tablaPuntuaciones = [
    { nombre: 'Juan', puntuacion: 855 },
    { nombre: 'Pedro', puntuacion: 803 },
    { nombre: 'Luis', puntuacion: 720 },
  ];

  sumar(cantidad: number): void {
    this.contador += cantidad;
    this.textClases={
      warning: this.contador>75 && this.contador <=100,
      danger:this.contador>50 && this.contador <75,
      success:this.contador >=0 && this.contador<50
    }
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
    this.bonus = false;
  }
  

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['Valor predeterminado'],
      email: ['ejemplo@correo.com']
    });
  }

  resetFormulario() {
    this.miFormulario.reset({
      nombre: 'Valor predeterminado',
      email: 'ejemplo@correo.com'
    });
  }
  


}
