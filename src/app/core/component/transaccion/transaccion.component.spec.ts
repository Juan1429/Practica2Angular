import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transaccion } from '../../models/transaccion';

import { TransaccionComponent } from './transaccion.component';

describe('TransaccionComponent', () => {
  let component: TransaccionComponent;
  let fixture: ComponentFixture<TransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('transferencia sin origen', ()=>{

let transaccion:Transaccion = new Transaccion();
expect(()=>{component.transferirdinero(transaccion)}).toThrow(new Error ("No hay cuenta de origen"));


});



});
