import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInscripcionComponent } from './solicitud-inscripcion.component';

describe('SolicitudInscripcionComponent', () => {
  let component: SolicitudInscripcionComponent;
  let fixture: ComponentFixture<SolicitudInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
