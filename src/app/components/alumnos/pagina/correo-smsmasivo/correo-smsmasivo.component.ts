import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA = [
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum',
  },
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum',
  },
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum',
  },
  {
    codigo : 1,
    nombres : 'Lorem Ipsum',
    correo : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    dni: 'Lorem Ipsum',
  },
];

@Component({
  selector: 'app-correo-smsmasivo',
  templateUrl: './correo-smsmasivo.component.html',
  styleUrls: ['./correo-smsmasivo.component.scss']
})
export class CorreoSmsmasivoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombres','correo','telefono','dni' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
