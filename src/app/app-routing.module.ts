
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UsersControlComponent } from './users-control/users-control.component';
import {CitaControlComponent} from "./cita-control/cita-control.component";
import { RegisterComponent } from './register/register.component';
import {EditCitaComponent} from "./edit-cita/edit-cita.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {RegisterCitaComponent} from "./registerCita/registerCita.component";

const routes: Routes = [
  {path:'', component: MainMenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users-control', component: UsersControlComponent},
  {path: 'tool-control', component: CitaControlComponent},
  {path: 'reg',component: RegisterComponent},
  {path: 'editT', component: EditCitaComponent},
  {path: 'editU',component:EditUserComponent},
  {path: 'regCita',component:RegisterCitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
