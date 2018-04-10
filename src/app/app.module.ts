import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeletoresComponent } from './seletores/seletores.component';
import { VariaveisComponent } from './variaveis/variaveis.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { HerancaComponent } from './heranca/heranca.component';
import { OperacoesComponent } from './operacoes/operacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SeletoresComponent,
    VariaveisComponent,
    InterpolacaoComponent,
    HerancaComponent,
    OperacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
