import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotaNaoEncontradaComponent } from './componentes/rota-nao-encontrada/rota-nao-encontrada.component';
import { Rota1Component } from './componentes/rota1/rota1.component';
import { Rota2Component } from './componentes/rota2/rota2.component';

const routes: Routes = [
  {
    path: '',
    component: Rota1Component
  },
  {
    path: 'rota2',
    component: Rota2Component
  },
  {
    path: '**',
    component:RotaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
