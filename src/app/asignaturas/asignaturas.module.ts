import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AgregarComponent } from './agregar/agregar.component';

import { AsignaturasService } from './services/asignaturas.service';



@NgModule({
  declarations: [
    MainPageComponent,
    AsignaturasComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AsignaturasService
  ]
})
export class AsignaturasModule { }
