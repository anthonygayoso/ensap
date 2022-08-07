import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA = [
  {
    diplomado : '000001',
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    diplomado : '000001',
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    diplomado : '000001',
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    diplomado : '000001',
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
  {
    diplomado : '000001',
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
    promedio: '02',
  },
];


@Component({
  selector: 'app-diplomado',
  templateUrl: './diplomado.component.html',
  styleUrls: ['./diplomado.component.scss']
})
export class DiplomadoComponent implements OnInit {
// variables obligatorias en una tabla: display columns, data source, paginator
  displayedColumns: string[] = ['diplomado', 'constancia', 'anio', 'codigo','nombres','promedio' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  descargar(certificado){
    console.log(certificado)
  }
}

