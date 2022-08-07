import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports : [
        MaterialModule,
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})

export class SharedModule { }