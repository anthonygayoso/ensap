import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA = [
  {
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
  },
  {
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
  },
  {
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
  },
  {
    constancia :'1' ,
    anio : '2022',
    codigo: 'Lorem Ipsum',
    nombres: 'Lorem Ipsum',
  },
];


@Component({
  selector: 'app-reconocimiento',
  templateUrl: './reconocimiento.component.html',
  styleUrls: ['./reconocimiento.component.scss']
})
export class ReconocimientoComponent implements OnInit {
// variables obligatorias en una tabla: display columns, data source, paginator
  displayedColumns: string[] = [ 'constancia', 'anio', 'codigo','nombres', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  descargar(certificado){
    console.log(certificado)
  }
}
