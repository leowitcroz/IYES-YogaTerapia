import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicosService {
  constructor() {}

  gettexto() {
    return [
      'Professor de yoga formado na Faculdade Espírita em Curitiba e pós graduando em Ayuveda.',
      'Especialista em fisiologia do exercício',
      'Biólogo formado pela Universidade Federal do Paraná',
      'Mestre em parasitologia molecular e imunologia',
    ];
  }

  getlistaBeneficios() {
    return [
      'Renovar e purifica a energia vital.',
      'Permite conhecer e entender melhor o próprio corpo.',
      'Trazer equilíbrio físico, mental e espiritual.',
      'Tornar possível o fortalecimento do sistema imunológico.',
      'Estimular a entender o poder do pensamento positivo.',
      'Aumento da concentração e do relaxamento.',
    ];
  }
}
