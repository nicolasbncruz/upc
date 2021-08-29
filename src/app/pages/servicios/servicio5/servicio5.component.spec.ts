import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio5Component } from './servicio5.component';

describe('Servicio5Component', () => {
  let component: Servicio5Component;
  let fixture: ComponentFixture<Servicio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
