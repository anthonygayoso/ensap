import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA = [
  {
    nombres : 'Sussan',
    dni : 73175825,
    codigo : 'C001',
    curso: '1',
    nota1: '01',
    nota2: '02',
    nota3: '03',
    nota4: '04',
    nota5: '05',
    notafin: '20'
  },
  {
    nombres : 'yaqui',
    dni : 73175825,
    codigo : 'C001',
    curso: '1',
    nota1: '01',
    nota2: '02',
    nota3: '03',
    nota4: '04',
    nota5: '05',
    notafin: '20'
  },
  {
    nombres : 'Sussan',
    dni : 73175825,
    codigo : 'C001',
    curso: '1',
    nota1: '01',
    nota2: '02',
    nota3: '03',
    nota4: '04',
    nota5: '05',
    notafin: '20'
  },
  {
    nombres : 'yaqui',
    dni : 73175825,
    codigo : 'C001',
    curso: '1',
    nota1: '01',
    nota2: '02',
    nota3: '03',
    nota4: '04',
    nota5: '05',
    notafin: '20'
  }
  
];


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
// variables obligatorias en una tabla: display columns, data source, paginator
  displayedColumns: string[] = ['nombres', 'dni', 'codigo', 'curso','nota1','nota2','nota3','nota4','nota5','notafin', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
