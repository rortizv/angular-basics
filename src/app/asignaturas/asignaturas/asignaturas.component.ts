import { Component } from '@angular/core';
import { AsignaturasService } from '../services/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html'
})
export class AsignaturasComponent {

  //@Input() asignaturas: Asignatura[] = [];
  get asignaturas () {
    return this.asignaturasService.asignaturas;
  }

  constructor( private asignaturasService: AsignaturasService) {
    
  }

}
