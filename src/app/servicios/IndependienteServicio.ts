import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {IndependienteModelo} from "../modelo/Independiente.modelo";
import {environment} from "../../environments/environment";
import {direccionesUrl} from "../direccionesUrl";
import {map} from "rxjs/operators";

@Injectable()
export class IndependienteServicio {

  private independientesActuales: IndependienteModelo[] = [];

  public constructor(
    private http: HttpClient
  ) {
  }

  public registrarIndependiente(independiente: IndependienteModelo): Observable<any> {
    return this.http.put(environment.URL_BASE + direccionesUrl.INDEPENDIENTE_REGISTRO, independiente);
  }

  public consultarListaIndependientes(): void {
    this.http.get<IndependienteModelo[]>(
      environment.URL_BASE + direccionesUrl.INDEPENDIENTE_CONSULTA_TODOS).pipe(
      map((independientes: IndependienteModelo[]) =>
        this.independientesActuales = independientes
      )
    ).subscribe();
  }

  public obtenerListaIndependientesActuales(): IndependienteModelo[] {
    return this.independientesActuales;
  }

  public aprobarIndependiente(tipoDocumento: string, numeroDocumento: string): Observable<any> {
    return this.http.post(
      `${environment.URL_BASE}${direccionesUrl.INDEPENDIENTE_APROBADO}/${tipoDocumento}/${numeroDocumento}`, null);
  }

  public rechazarIndependiente(tipoDocumento: string, numeroDocumento: string): Observable<any> {
    return this.http.post(
      `${environment.URL_BASE}${direccionesUrl.INDEPENDIENTE_RECHAZADO}/${tipoDocumento}/${numeroDocumento}`, null);
  }
}
