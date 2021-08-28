import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio2Component } from './servicio2.component';

describe('Servicio2Component', () => {
  let component: Servicio2Component;
  let fixture: ComponentFixture<Servicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
