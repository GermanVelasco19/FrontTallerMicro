import { Component } from '@angular/core';
import {Cita} from "../main-menu/main-menu.component";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {CitaService} from "../cita.service";
import {CookieService} from "ngx-cookie-service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent {
  cita: Cita = {
    id_cita: 0,
    nombre: '',
    last_name: '',
    proposito: '',
    cedula: 0,
    fecha:''
  };

  EditTForm = this.formBuilder.group({
    nombre: '',
    last_name: '',
    proposito: '',
    cedula: 0,
    fecha:''
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private citaService: CitaService, private  cookies:CookieService) {}


  ngOnInit() {
    // Lógica para obtener el ID de la herramienta a editar y cargar los datos correspondientes
    // Puedes obtener el ID de la URL o de algún otro lugar según tu implementación
    const citaId = parseInt(this.cookies.get('name'));

    this.citaService.search(citaId).subscribe((data:Cita[]) => {
      this.cita = data[0];
    });
  }
  updateCita(): void {
    let nameParam:string;
    let lastname:string;
    let cedula:string;
    let proposito:string;
    let date:string;

    nameParam = ''+this.EditTForm.value.nombre;
    lastname = ''+ this.EditTForm.value.last_name;
    cedula= ''+this.EditTForm.value.cedula;
    proposito = ''+this.EditTForm.value.proposito;
    date = ''+this.EditTForm.value.fecha;

    this.cita.nombre = nameParam;
    this.cita.last_name=lastname;
    this.cita.proposito=proposito;
    this.cita.cedula=parseInt(cedula);
    this.cita.fecha=date;

    this.citaService.updateTool(this.cita, this.cita.id_cita).subscribe(() => {
    });
    this.router.navigate(['/']);
  }

}
