/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorreoSmsmasivoComponent } from './correo-smsmasivo.component';

describe('CorreoSmsmasivoComponent', () => {
  let component: CorreoSmsmasivoComponent;
  let fixture: ComponentFixture<CorreoSmsmasivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreoSmsmasivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoSmsmasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
