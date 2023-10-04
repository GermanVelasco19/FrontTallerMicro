import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCitaComponent } from './edit-cita.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CitaService } from '../cita.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('EditToolComponent', () => {
  let component: EditCitaComponent;
  let fixture: ComponentFixture<EditCitaComponent>;
  let formBuilder: FormBuilder;
  let router: Router;
  let toolService: CitaService;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(async () => {
    const cookieServiceSpy = jasmine.createSpyObj('CookieService', ['get']);

    await TestBed.configureTestingModule({
      declarations: [EditCitaComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: CookieService, useValue: cookieServiceSpy }
      ]
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    router = TestBed.inject(Router);
    toolService = TestBed.inject(CitaService);
    cookieService = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitaComponent);
    component = fixture.componentInstance;

    component.tool = {
      id: 1,
      name: 'Tool 1',
      img: 'image.jpg',
      description: 'Tool description',
      price: 10,
    };

    component.EditTForm.setValue({
      name: 'New Tool',
      img: 'new-image.jpg',
      description: 'New tool description',
      price: 20,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
