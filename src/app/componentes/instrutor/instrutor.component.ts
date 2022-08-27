import { Component, OnInit } from '@angular/core';

import{ServicosService} from 'src/app/servicos.service';

@Component({
  selector: 'app-instrutor',
  templateUrl: './instrutor.component.html',
  styleUrls: ['./instrutor.component.scss']
})
export class InstrutorComponent implements OnInit {

  texto!: string[];


  constructor(public servicosService: ServicosService) {
    this.texto = this.servicosService.gettexto();
   }

  ngOnInit(): void {
  }

}
