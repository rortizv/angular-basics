import { Component } from '@angular/core';

import { Asignatura } from '../interfaces/asignatura.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Asignatura = {
    nombre: '',
    creditos: 0
  }

  constructor() {}
  
}