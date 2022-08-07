import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/dialogs/change-password/change-password.component';

interface Person {
  dni: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-actualizacion-clave',
  templateUrl: './actualizacion-clave.component.html',
  styleUrls: ['./actualizacion-clave.component.scss']
})

export class ActualizacionClaveComponent implements OnInit {
  radioValue : string = "A";
  dataSet: Person[] = [
    {
      dni: '73172569',
      name: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
    },
    {
      dni: '73172569',
      name: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
    },
    {
      dni: '73172569',
      name: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
    },
    {
      dni: '73172569',
      name: 'Lorem Ipsum',
      email: 'Lorem Ipsum',
    }
  ];
  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  changePassword() {
    this.dialog.open(ChangePasswordComponent, {
      width: "500px",
      autoFocus: false
    });
  }

}
