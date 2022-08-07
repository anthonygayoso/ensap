import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA = [
  {
    codigo : '000001',
    nombres :'Sussan' ,
    constancia : '1',
    certificado: '1',
    nota: '01',
    estado: '02',
  },
  {
    codigo : '000001',
    nombres :'Sussan' ,
    constancia : '1',
    certificado: '2',
    nota: '01',
    estado: '02',
  },
  {
    codigo : '000001',
    nombres :'Sussan' ,
    constancia : '1',
    certificado: '3',
    nota: '01',
    estado: '02',
  },
  {
    codigo : '000001',
    nombres :'Sussan' ,
    constancia : '1',
    certificado: '1',
    nota: '01',
    estado: '02',
  },
  {
    codigo : '000001',
    nombres :'Sussan' ,
    constancia : '1',
    certificado: '1',
    nota: '01',
    estado: '02',
  },

];


@Component({
  selector: 'app-miscursos',
  templateUrl: './miscursos.component.html',
  styleUrls: ['./miscursos.component.scss']
})
export class MiscursosComponent implements OnInit {
// variables obligatorias en una tabla: display columns, data source, paginator
  displayedColumns: string[] = ['codigo', 'nombres', 'constancia', 'certificado','nota','estado', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  descargar(certificado){
    console.log(certificado)
  }
}
