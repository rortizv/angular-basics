import { Component, Input, Output } from '@angular/core';
import { Asignatura } from '../interfaces/asignatura.interface';
import { AsignaturasService } from '../services/asignaturas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Asignatura = {
    nombre: '',
    creditos: 0
  }

  constructor( private asignaturasService: AsignaturasService) {}

  // @Output() onNuevaAsignatura: EventEmitter<Asignatura> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return;}

    //this.onNuevaAsignatura.emit(this.nuevo);
    this.asignaturasService.agregarAsignatura(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      creditos: 0
    }

  }

}
