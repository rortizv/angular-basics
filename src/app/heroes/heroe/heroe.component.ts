import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'IronMan';
    edad: number = 40;

    get nombreMayusculas(): string {
        return this.nombre.toUpperCase();
    }

    getNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(): void {
        this.edad = 35;
    }
}