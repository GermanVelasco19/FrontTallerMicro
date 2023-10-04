import { Component } from '@angular/core';
import { CitaService, Cita } from '../cita.service';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'tool-control',
  templateUrl: './cita-control.component.html',
  styleUrls: ['./cita-control.component.css']
})
/**
 * @description Componente encargado de mostrar las opciones de manejo de herramientas de acuerdo a las cargadas en la base de datos
 * @class Tool-controlComponent
 * @constructor
 * @param {CitaService} toolservice -servicio de angular para realizar peticiones HTTP al microServicio toolsWeb
 */
export class CitaControlComponent {
  constructor(private citaservice: CitaService, private cookies:CookieService, private router:Router) {}
  /**
   * lista de tools a mostrar en la pagina
   * @type {Cita[]}
   */
  citas: Cita[] = [];
  /**

   Inicializa el componente obteniendo la lista de tools
   utilizando el método getTools() y suscribiéndose al resultado para actualizar la variable "tool"
   cuando la lista cambie. También se suscribe al observable "tools$" del servicio CitaService
   para actualizar la variable "tool" cuando la lista de usuarios cambie en el servicio.
   @returns void
   */
   ngOnInit(): void {

    this.citaservice.getAll().subscribe(
      (data: Cita[]) => {
        this.citas = data;
      }
    )

    this.citaservice.citas$.subscribe(
      (data: Cita[]) => {
        this.citas = data;
      }
    );
  }

  borrar(id: number | null | undefined): void {
    this.citaservice.deleteCita(id).subscribe(() => {
      location.reload();
    });
  }

  editar(name:string):void{
     this.cookies.set('name',name);
     this.router.navigate(['/editT'])
  }
  nuevo():void{
     this.router.navigate(['/regCita'])
  }
}
