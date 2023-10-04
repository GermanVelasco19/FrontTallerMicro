import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PaginationButtonsComponent } from './pagination-buttons/pagination-buttons.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersControlComponent } from './users-control/users-control.component';
import { CitaControlComponent } from './cita-control/cita-control.component';
import { RegisterComponent } from './register/register.component';
import { EditCitaComponent } from './edit-cita/edit-cita.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {RegisterCitaComponent} from "./registerCita/registerCita.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavmenuComponent,
    MainMenuComponent,
    PaginationButtonsComponent,
    UsersControlComponent,
    CitaControlComponent,
    RegisterComponent,
    EditCitaComponent,
    EditUserComponent,
    RegisterCitaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
