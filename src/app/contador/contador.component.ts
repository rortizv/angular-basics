import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h2>{{titulo}}</h2>

        <h4>Contando de {{base}} en {{base}}</h4>

        <button (click)= "acumular(base)">+5</button>
        <span>{{numero}}</span>
        <button (click)= "acumular(base*(-1))">-5</button>

    `
})
export class ContadorComponent {
    titulo: string = 'App Acumulador';
    numero: number = 0;
    base: number = 5;
  
    acumular( valor: number ) {
      this.numero += valor;
    }
}