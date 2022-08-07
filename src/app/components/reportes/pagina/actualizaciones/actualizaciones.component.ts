import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA = [
  {
    dni : 1,
    nombres : 'Lorem Ipsum',
    apellidos : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    fechayhora: '2020-10-22 00:55:02.0',
    departamento: 'Lorem Ipsum',
    actualizado: 'Si',
  },
  {
    dni : 1,
    nombres : 'Lorem Ipsum',
    apellidos : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    fechayhora: '2020-10-22 00:55:02.0',
    departamento: 'Lorem Ipsum',
    actualizado: 'Si',
  },
  {
    dni : 1,
    nombres : 'Lorem Ipsum',
    apellidos : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    fechayhora: '2020-10-22 00:55:02.0',
    departamento: 'Lorem Ipsum',
    actualizado: 'Si',
  },
  {
    dni : 1,
    nombres : 'Lorem Ipsum',
    apellidos : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    fechayhora: '2020-10-22 00:55:02.0',
    departamento: 'Lorem Ipsum',
    actualizado: 'Si',
  }
];

@Component({
  selector: 'app-actualizaciones',
  templateUrl: './actualizaciones.component.html',
  styleUrls: ['./actualizaciones.component.scss']
})
export class ActualizacionesComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'nombres','apellidos','correo', 'telefono','fechayhora','departamento','actualizado' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
  }

}
