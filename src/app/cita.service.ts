import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import {User} from "./register.service";


interface Cita {
  id_cita:number|null|undefined,
  nombre: string;
  last_name: string;
  fecha: string;
  proposito: string;
  cedula: number;
}

@Injectable({
  providedIn: 'root'
})

/**

 @description Servicio encargado de realizar las consultas de las herramientas ya sea con filtro de marca, nombre o sin filtro
 @class CitaService
 @constructor
 @param {HttpClient} http - servicio Angular que se encarga de realizar las peticiones htttp a los microservicios
 */
export class CitaService {

  /**
   * variable compartida de lista de herramientas que genera un observable para que otras clases puedan modificarla y/o verla
   * @type {BehaviorSubject}
   * @private
   */
  private citasSubject = new BehaviorSubject<Cita[]>([]);
  citas$ = this.citasSubject.asObservable();

  constructor(private http: HttpClient) { }

  /**

   @description Método encargado de actualizar la lista de herramientas que presenta el main-menu.
   @method updateTools
   @param {Cita[]} newCitas - Contiene las herramientas a mostrar.
   */
  updateTools(newCitas: Cita[]) {
    this.citasSubject.next(newCitas);
  }

  /**

   @description Método encargado de devolver las herramientas
   @method getTools
   @returns {Observable<Cita[]>} - Observable que emite la respuesta de la petición HTTP realizada.
   */
  getAll(): Observable<Cita[]> {
    return this.http.get<Cita[]>("http://localhost:8089/getAll");
  }

  deleteCita(id:number|null|undefined):Observable<any>{
    const url = `http://localhost:8089/deleteCita/${id}`;
    return this.http.delete(url);
  }

  updateTool(cita: Cita, id: number|null|undefined): Observable<any> {
    const url = `http://localhost:8089/updatetool/${id}`;
    return this.http.put(url, cita);
  }

  search(id: number): Observable<any> {
    const url = `http://localhost:8089/${id}`;
    return this.http.get(url);
  }

  searchCedula(cedula: number): Observable<any> {
    const url = `http://localhost:8089/searchCedula/${cedula}`;
    return this.http.get(url);
  }

  NewCita(
    id_cita:number|null|undefined,
    nombre: string,
    last_name: string,
    fecha: string,
    cedula: number,
    proposito: string
  ): Observable<any> {
    const cita: Cita = {
      id_cita,
      nombre,
      last_name,
      fecha,
      cedula,
      proposito
    };
    return this.http.post<boolean>('http://localhost:8089/NewCita', cita);
  }
}
export { Cita };
