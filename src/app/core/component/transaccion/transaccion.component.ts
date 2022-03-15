import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  transferirdinero(transaccion: Transaccion) {

    if (!transaccion.CuentaEnvia) {
      throw new Error ("No hay cuenta de origen");
    }

    return true;

  }

}
