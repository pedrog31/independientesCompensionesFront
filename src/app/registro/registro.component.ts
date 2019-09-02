import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IndependienteModelo} from "../modelo/Independiente.modelo";
import {IndependienteServicio} from "../servicios/IndependienteServicio";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private independienteServicio: IndependienteServicio,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.crearFormularioRegistroIndependiente();
  }

  private crearFormularioRegistroIndependiente() {
    this.formularioRegistro = this.fb.group({
      tipoDocumento: [undefined, Validators.required],
      numeroDocumento: [ undefined,  [Validators.required, Validators.min(1000001)]],
      nombres: [undefined, Validators.required],
      apellidos: [undefined, Validators.required],
      fechaNacimiento: [undefined, Validators.required],
      oficio: [undefined, Validators.required],
      ingresosMensuales: [undefined, Validators.required],
      telefono: [undefined, Validators.required],
      correo: [undefined, Validators.required],
      sexo: [undefined, Validators.required],
    });
  }

  public registrarIndependiente() {
    this.independienteServicio.registrarIndependiente(this.formularioRegistro.value).subscribe(() => {
      this.mostrarMensaje('Independiente registrado con exito');
    }, error => {
      this.mostrarMensaje('Ocurrio un error registrando independiente');
    });
  }

  private mostrarMensaje(mensaje: string) {
    this.snackBar.open(mensaje,null, {
      duration: 2000,
    });
  }
}
