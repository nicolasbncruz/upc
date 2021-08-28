import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio6Component } from './servicio6.component';

describe('Servicio6Component', () => {
  let component: Servicio6Component;
  let fixture: ComponentFixture<Servicio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
