import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor() { }

  getlistaBeneficios(){

    return [
      'Renovar e purifica a energia vital.',
      'Permite conhecer e entender melhor o próprio corpo.',
      'Trazer equilíbrio físico, mental e espiritual.',
      'Tornar possível o fortalecimento do sistema imunológico.',
      'Estimular a entender o poder do pensamento positivo.',
      'Aumento da concentração e do relaxamento.',
    ]

  }
}
