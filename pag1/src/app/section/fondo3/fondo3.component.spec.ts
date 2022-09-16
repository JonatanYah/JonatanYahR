import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fondo3Component } from './fondo3.component';

describe('Fondo3Component', () => {
  let component: Fondo3Component;
  let fixture: ComponentFixture<Fondo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fondo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fondo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
