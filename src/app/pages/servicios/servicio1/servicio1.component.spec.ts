import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio1Component } from './servicio1.component';

describe('Servicio1Component', () => {
  let component: Servicio1Component;
  let fixture: ComponentFixture<Servicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
