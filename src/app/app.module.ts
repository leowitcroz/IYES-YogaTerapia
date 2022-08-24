import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { GeralComponent } from './page/geral/geral.component';
import { BeneficiosComponent } from './componentes/beneficios/beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    GeralComponent,
    BeneficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
