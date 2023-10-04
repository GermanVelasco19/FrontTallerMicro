import { Component } from '@angular/core';
import { CitaService } from "../cita.service";
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['../app.component.css']
})

export class NavmenuComponent {

  constructor(private citaservice: CitaService, private cookies: CookieService, private router: Router) {}

  word = "";
  searchType = "marca";
  Authenticated = 0;
  currentRoute="";

  ngOnInit() {
    this.checkAuthentication();
  }

  search() {

    this.SearchCedula();
  }

  SearchCedula() {
    if (this.word!=null) {
      this.citaservice.searchCedula(parseInt(this.word)).subscribe(
        (data) => {
          this.citaservice.updateTools(data);
        }
      );
    }
  }

  logOut() {
    this.cookies.delete('token');
    this.cookies.delete("user");
    location.reload();
  }

  private checkAuthentication() {
    if (this.cookies.get('token') !== '') {
      this.Authenticated = 1;
    }
  }

  getCurrentRoute(): Promise<string> {
    return new Promise((resolve) => {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          resolve(event.url);
        }
      });
    });
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
