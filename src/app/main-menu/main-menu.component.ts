import { Component } from '@angular/core';
import { CitaService } from '../cita.service';

// Interface que define las propiedades de una herramienta
interface Cita {
  id_cita: number|null|undefined;
  nombre: string;
  last_name: string;
  fecha: string;
  proposito: string;
  cedula: number;
}

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['../app.component.css']
})

/**
 * @description Componente encargado de mostrar el menu con todas las herramientas
 * @class MainMenuComponent
 * @constructor
 * @param {CitaService} toolservice -servicio de angular para realizar peticiones HTTP al microServicio ToolsWeb y ToolsSearch
 */
export class MainMenuComponent {

  constructor(private citaservice: CitaService) {}

  /**
   * lista de herramientas a mostrar en la pagina principal
   * @type {Cita[]}
   */
  citas: Cita[] = [];

  /**

   Inicializa el componente obteniendo la lista de herramientas del servicio CitaService
   utilizando el método getTools() y suscribiéndose al resultado para actualizar la variable "tools"
   cuando la lista cambie. También se suscribe al observable "tools$" del servicio CitaService
   para actualizar la variable "tools" cuando la lista de herramientas cambie en el servicio.
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
}
export {Cita}
