import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCitaComponent } from './registerCita.component';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { PaginationButtonsComponent } from '../pagination-buttons/pagination-buttons.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterCitaComponent;
  let fixture: ComponentFixture<RegisterCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCitaComponent, NavmenuComponent, PaginationButtonsComponent],
      imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
