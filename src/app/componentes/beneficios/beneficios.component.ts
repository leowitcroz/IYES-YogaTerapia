import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss'],
})
export class BeneficiosComponent implements OnInit {
  listaBeneficios: string[] = [
    'Renovar e purifica a energia vital.',
    'Permite conhecer e entender melhor o próprio corpo.',
    'Trazer equilíbrio físico, mental e espiritual.',
    'Tornar possível o fortalecimento do sistema imunológico.',
    'Estimular a entender o poder do pensamento positivo.',
    'Aumento da concentração e do relaxamento.',
  ];

  constructor() {

      for(let i = 0; i < this.listaBeneficios.length; i++){
        let lista = this.listaBeneficios[i];
      }

  }

  ngOnInit(): void {}
}
