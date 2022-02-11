import { Component } from '@angular/core';

@Component({
  selector: 'CA-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CENTRAL DE ACEROS M Y M';
  clientes=[
  {
    titulo:"IMPRESIONES DIGITALES ROTULTEC",
    nombre:"IMPRESIONES DIGITALES ROTULTEC",
    direccion:"JOSE MARIA ZELEDÓN, CURRIDABAT",
    telefono:"83944683",
    codigo:"131320",
  },
  {
    titulo:"VITROAMBIENTES SRL",
    nombre:"VITROAMBIENTES SRL",
    direccion:"HEREDIA 2000",
    telefono:"88135131",
    codigo:"131321",
  },
  {
    titulo:"OTRO",
    nombre:"",
    direccion:"",
    telefono:"",
    codigo:"",
  }
]
  clienteActual = this.clientes[0];
  flagPantalla=0;
}
