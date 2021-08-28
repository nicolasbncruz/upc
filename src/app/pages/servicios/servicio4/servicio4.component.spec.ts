import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio4Component } from './servicio4.component';

describe('Servicio4Component', () => {
  let component: Servicio4Component;
  let fixture: ComponentFixture<Servicio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
