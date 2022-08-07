import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';



const ELEMENT_DATA = [
  {
    codCurso : '00001',
    curso : 'CURSO EN SALUD INTEGRAL DE MUJERES EN SITUACION DE VIOLENCIA',
    codFirma : '00001',
    firma : 'SUSSAN GAYOSO',
    notaFin : 'SUSSAN GAYOSO',
    resolCertif : 'SUSSAN GAYOSO',
    resolConstan : 'SUSSAN GAYOSO',

  },
  {
    codCurso : '00001',
    curso : 'CURSO EN SALUD INTEGRAL DE MUJERES EN SITUACION DE VIOLENCIA',
    codFirma : '00001',
    firma : 'SUSSAN GAYOSO',
    notaFin : 'SUSSAN GAYOSO',
    resolCertif : 'SUSSAN GAYOSO',
    resolConstan : 'SUSSAN GAYOSO',

  },
  {
    codCurso : '00001',
    curso : 'CURSO EN SALUD INTEGRAL DE MUJERES EN SITUACION DE VIOLENCIA',
    codFirma : '00001',
    firma : 'SUSSAN GAYOSO',
    notaFin : 'SUSSAN GAYOSO',
    resolCertif : 'SUSSAN GAYOSO',
    resolConstan : 'SUSSAN GAYOSO',

  },
  {
    codCurso : '00001',
    curso : 'CURSO EN SALUD INTEGRAL DE MUJERES EN SITUACION DE VIOLENCIA',
    codFirma : '00001',
    firma : 'SUSSAN GAYOSO',
    notaFin : 'SUSSAN GAYOSO',
    resolCertif : 'SUSSAN GAYOSO',
    resolConstan : 'SUSSAN GAYOSO',

  },
  {
    codCurso : '00001',
    curso : 'CURSO EN SALUD INTEGRAL DE MUJERES EN SITUACION DE VIOLENCIA',
    codFirma : '00001',
    firma : 'SUSSAN GAYOSO',
    notaFin : 'SUSSAN GAYOSO',
    resolCertif : 'SUSSAN GAYOSO',
    resolConstan : 'SUSSAN GAYOSO',

  },
];

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  displayedColumns: string[] = ['codCurso','curso', 'codFirma','firma','notaFin','resolCertif','resolConstan' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
