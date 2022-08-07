import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA = [
  {
    constancia : '000001',
    certificado :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    constancia : '000001',
    certificado :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    constancia : '000001',
    certificado :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    constancia : '000001',
    certificado :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    constancia : '000001',
    certificado :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
];


@Component({
  selector: 'app-certificacion',
  templateUrl: './certificacion.component.html',
  styleUrls: ['./certificacion.component.scss']
})
export class CertificacionComponent implements OnInit {
// variables obligatorias en una tabla: display columns, data source, paginator
  displayedColumns: string[] = ['constancia', 'certificado', 'anio', 'codigo','nombres','promedio' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  descargar(certificado){
    console.log(certificado)
  }
}
