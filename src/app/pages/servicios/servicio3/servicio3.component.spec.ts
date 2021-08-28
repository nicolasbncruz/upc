import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio3Component } from './servicio3.component';

describe('Servicio3Component', () => {
  let component: Servicio3Component;
  let fixture: ComponentFixture<Servicio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
