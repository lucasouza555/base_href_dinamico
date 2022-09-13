import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { Rota1Module } from './componentes/rota1/rota1.module';
import { Rota2Module } from './componentes/rota2/rota2.module';
import { RotaNaoEncontradaModule } from './componentes/rota-nao-encontrada/rota-nao-encontrada.module';
import { environment } from '../environments/environment';

export function getBaseHref() {
  let baseHref = undefined;

  if(environment.production) {
    console.log('pathname', window.location.pathname);

    let partes = window.location.pathname.split('/');
    let contextoFixo = 'teste';
    let contextos = ['loja1','loja2','loja3'];  

    //["","teste","loja1",""] ou ["","teste","loja1","rota2"]
    let cond1 = partes.length >= 4 && partes[1] == contextoFixo && contextos.includes(partes[2]);
    
    //["", "teste", "loja1"]
    let cond2 = partes.length == 3 && partes[1] == contextoFixo && partes[2].length > 0 && contextos.includes(partes[2]);
    
    //["","teste",""] ou ["","teste","rota2"] 
    let cond3 = partes.length >= 3 && partes[1] == contextoFixo;
    
    //["","teste"]
    let cond4 = partes.length == 2 && partes[1] == contextoFixo;
    
    if(cond1 || cond2) {
      baseHref = "/"+partes[1]+"/"+partes[2]+"/";
    } else if(cond3 || cond4) {
      baseHref = "/"+partes[1]+"/";
    } else {
      baseHref = undefined;
    }

    console.log('base-href', baseHref);
  }
  
  return baseHref; 
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Rota1Module,
    Rota2Module,
    RotaNaoEncontradaModule
  ],
  providers: [
    {
      provide:APP_BASE_HREF,
      useFactory:getBaseHref  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
