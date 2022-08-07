import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA = [
  {
    nombres : 'Lorem Ipsum',
    dni : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    correo: 'Lorem Ipsum',
    departamento: 'Lorem Ipsum',
    provincia: 'Lorem Ipsum',
    distrito: 'Lorem Ipsum',
    nota1: '04',
    nota2: '04',
    nota3: '04',
    nota4: '04',
    nota5: '04',
    notafin: '20'
  },
  {
    nombres : 'Lorem Ipsum',
    dni : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    correo: 'Lorem Ipsum',
    departamento: 'Lorem Ipsum',
    provincia: 'Lorem Ipsum',
    distrito: 'Lorem Ipsum',
    nota1: '04',
    nota2: '04',
    nota3: '04',
    nota4: '04',
    nota5: '04',
    notafin: '20'
  },
  {
    nombres : 'Lorem Ipsum',
    dni : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    correo: 'Lorem Ipsum',
    departamento: 'Lorem Ipsum',
    provincia: 'Lorem Ipsum',
    distrito: 'Lorem Ipsum',
    nota1: '04',
    nota2: '04',
    nota3: '04',
    nota4: '04',
    nota5: '04',
    notafin: '20'
  },
  {
    nombres : 'Lorem Ipsum',
    dni : 'Lorem Ipsum',
    telefono : 'Lorem Ipsum',
    correo: 'Lorem Ipsum',
    departamento: 'Lorem Ipsum',
    provincia: 'Lorem Ipsum',
    distrito: 'Lorem Ipsum',
    nota1: '04',
    nota2: '04',
    nota3: '04',
    nota4: '04',
    nota5: '04',
    notafin: '20'
  },
];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'dni', 'telefono', 'correo','departamento','provincia','distrito','nota1','nota2','nota3','nota4','nota5','notafin', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
