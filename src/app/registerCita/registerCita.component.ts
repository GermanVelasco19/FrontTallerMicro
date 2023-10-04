import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {CitaService} from "../cita.service";


@Component({
  selector: 'register',
  templateUrl: './registerCita.component.html',
  styleUrls: ['./registerCita.component.css']
})
/**

 @description Componente que muestra la pagina de registro de nuevos usuarios
 @class RegisterCitaComponent
 @constructor
 @param {FormBuilder} formbuilder - Clase de formularios proporcionada por angular
 @param {Router} router - Clase de angular para el manejo de rutas dentro de la aplicacion
 @param {LoginService} loginService - Servicio encargado de hacer las peticiones al microservicio de autorizacion
 */
export class RegisterCitaComponent {

  /**
   * @description formulario de registro construido con FormBuilder
   * @type {FormBuilder}
   */
  RegForm = this.formbuilder.group({
    id_cita:0,
    nombre: '',
    last_name: '',
    cedula: 0,
    fecha: '',
    proposito: ''
  });

  authenticated = 0;

  constructor(private formbuilder: FormBuilder, private router: Router , private citaService: CitaService) {}


  onsubmit(): void {
    // Obtiene los valores del formulario de inicio de sesión
    let id_citaParam:number|null|undefined;
    let nombreParam: string;
    let last_nameParam: string;
    let cedulaParam: string;
    let fechaParam: string;
    let propositoParam: string;

    id_citaParam=this.RegForm.value.id_cita;
    nombreParam= ''+ this.RegForm.value.nombre;
    last_nameParam=''+this.RegForm.value.last_name;
    cedulaParam=''+this.RegForm.value.cedula;
    fechaParam=''+this.RegForm.value.fecha;
    propositoParam=''+this.RegForm.value.proposito;

    // Envía una solicitud de inicio de sesión al servidor
    this.citaService.NewCita(id_citaParam,nombreParam,last_nameParam,fechaParam,parseInt(cedulaParam),propositoParam).subscribe()
    // Reinicia el formulario de inicio de sesión
    this.RegForm.reset();

  }
}
