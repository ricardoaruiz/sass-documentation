import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SeletoresComponent } from '../seletores/seletores.component';
import { VariaveisComponent } from '../variaveis/variaveis.component';
import { InterpolacaoComponent } from '../interpolacao/interpolacao.component';
import { HerancaComponent } from '../heranca/heranca.component';
import { OperacoesComponent } from '../operacoes/operacoes.component';

const appRoutes: Routes = [
  {
    path: 'seletores',
    component: SeletoresComponent
  },
  {
    path: 'variaveis',
    component: VariaveisComponent
  },
  {
    path: 'interpolacao',
    component: InterpolacaoComponent
  },
  {
    path: 'heranca',
    component: HerancaComponent
  },
  {
    path: 'operacoes',
    component: OperacoesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
