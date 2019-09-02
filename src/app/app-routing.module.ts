import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistroComponent} from "./registro/registro.component";
import {ConsultaComponent} from "./consulta/consulta.component";


const routes: Routes = [
  { path: '', component: ConsultaComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'registro',      component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
