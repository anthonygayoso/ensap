import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA = [
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum'
  },
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum'
  },
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum'
  },
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum'
  }
];

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.scss']
})

export class CargaMasivaComponent implements OnInit {
  file : string = "";
  displayedColumns: string[] = ['codigo','dni', 'nombres','correo','telefono' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  cargarArchivo(e){
    this.file = "archivo.xls";
  }

  guardar(){
    this.file = "";
  }
}
