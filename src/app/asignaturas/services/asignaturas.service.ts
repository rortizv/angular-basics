import { Injectable } from "@angular/core";
import { Asignatura } from "../interfaces/asignatura.interface";


@Injectable()
export class AsignaturasService {

    private _asignaturas: Asignatura[] = [
        {
          nombre: 'Bases de Datos I',
          creditos: 3
        },
        {
          nombre: 'Estructura de Datos',
          creditos: 3
        },
        {
          nombre: 'Analisis de Software',
          creditos: 2
        }
    ];

    get asignaturas(): Asignatura[] {
      return [...this._asignaturas];
      //... operador "spread": separa cada uno de los elementos independientes que tiene este arreglo y crea uno nuevo
    }

    constructor() { }

    agregarAsignatura( asignatura: Asignatura) {
      this._asignaturas.push( asignatura );
    }

}