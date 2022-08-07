import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';



const ELEMENT_DATA = [
  {
    nombres : 'Lorem Ipsum',
    dni : 73175825,
    curso: 'DIPLOMADO DE ATENCIÓN INTEGRAL CON ENFOQUE EN SALUD FAMILIAR Y COMUNITARIA',
    telefono: '015500491',
    correo: 'Lorem Ipsum',
    departamento: 'Ayacucho',
    provincia: 'Huamanga',
    distrito: 'Ayacucho',
    enviocorreo: '2021-04-08 15:43:28.0',
    enviosms: '2021-04-08 15:43:29.0',
    estadocorreo: 'Enviado',
    estadosms: 'Enviado',
    fechalogin: 'No registrado',
    fechadescarga: 'No registrado',
  },
  {
    nombres : 'Lorem Ipsum',
    dni : 73175825,
    curso: 'DIPLOMADO DE ATENCIÓN INTEGRAL CON ENFOQUE EN SALUD FAMILIAR Y COMUNITARIA',
    telefono: '015500491',
    correo: 'Lorem Ipsum',
    departamento: 'Ayacucho',
    provincia: 'Huamanga',
    distrito: 'Ayacucho',
    enviocorreo: '2021-04-08 15:43:28.0',
    enviosms: '2021-04-08 15:43:29.0',
    estadocorreo: 'Enviado',
    estadosms: 'Enviado',
    fechalogin: 'No registrado',
    fechadescarga: 'No registrado',
  },
  {
    nombres : 'Lorem Ipsum',
    dni : 73175825,
    curso: 'DIPLOMADO DE ATENCIÓN INTEGRAL CON ENFOQUE EN SALUD FAMILIAR Y COMUNITARIA',
    telefono: '015500491',
    correo: 'Lorem Ipsum',
    departamento: 'Ayacucho',
    provincia: 'Huamanga',
    distrito: 'Ayacucho',
    enviocorreo: '2021-04-08 15:43:28.0',
    enviosms: '2021-04-08 15:43:29.0',
    estadocorreo: 'Enviado',
    estadosms: 'Enviado',
    fechalogin: 'No registrado',
    fechadescarga: 'No registrado',
  },
  {
    nombres : 'Lorem Ipsum',
    dni : 73175825,
    curso: 'DIPLOMADO DE ATENCIÓN INTEGRAL CON ENFOQUE EN SALUD FAMILIAR Y COMUNITARIA',
    telefono: '015500491',
    correo: 'Lorem Ipsum',
    departamento: 'Ayacucho',
    provincia: 'Huamanga',
    distrito: 'Ayacucho',
    enviocorreo: '2021-04-08 15:43:28.0',
    enviosms: '2021-04-08 15:43:29.0',
    estadocorreo: 'Enviado',
    estadosms: 'Enviado',
    fechalogin: 'No registrado',
    fechadescarga: 'No registrado',
  },
 
];

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'dni','curso', 'telefono', 'correo','departamento','provincia','distrito','enviocorreo','enviosms','estadocorreo','estadosms','fechalogin','fechadescarga', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
