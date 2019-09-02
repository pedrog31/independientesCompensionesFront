import {Component, OnInit} from '@angular/core';
import {IndependienteServicio} from "../servicios/IndependienteServicio";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from "@angular/material";
import {IndependienteModelo} from "../modelo/Independiente.modelo";

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ConsultaComponent implements OnInit {

  independienteSeleccionado: IndependienteModelo;

  constructor(private independienteServicio: IndependienteServicio,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.independienteServicio.consultarListaIndependientes();
  }

  public aprobarIndependiente(): void {
    this.independienteServicio.aprobarIndependiente(
      this.independienteSeleccionado.tipoDocumento,
      this.independienteSeleccionado.numeroDocumento).subscribe(() => {
          this.independienteSeleccionado.estado = 'Aprobado';
          this.mostrarMensaje('Independiente aprobado con exito');
        }, error => {
          this.mostrarMensaje('Ocurrio un error aprobando independiente');
      });
  }

  public rechazarIndependiente(): void {
    this.independienteServicio.rechazarIndependiente(
      this.independienteSeleccionado.tipoDocumento,
      this.independienteSeleccionado.numeroDocumento).subscribe(() => {
          this.independienteSeleccionado.estado = 'Rechazado';
          this.mostrarMensaje('Independiente rechazado con exito');
        }, error => {
          this.mostrarMensaje('Ocurrio un error rechazando independiente');
      });
  }

  private mostrarMensaje(mensaje: string) {
    this.snackBar.open(mensaje, null, {
      duration: 2000,
    });
  }
}
