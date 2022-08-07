import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/dialogs/change-password/change-password.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed : boolean = false; 
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  cambiarPassword() {
    this.dialog.open(ChangePasswordComponent, {
      width: "500px",
      autoFocus: false
    });
  }

}
