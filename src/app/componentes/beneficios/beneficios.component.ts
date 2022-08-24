import { Component, OnInit } from '@angular/core';

import{ServicosService} from 'src/app/servicos.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss'],
})
export class BeneficiosComponent implements OnInit {
  listaBeneficios!: string[];

  constructor(public servicosService: ServicosService) {

    this.listaBeneficios = this.servicosService.getlistaBeneficios();

  }

  ngOnInit(): void {}
}
