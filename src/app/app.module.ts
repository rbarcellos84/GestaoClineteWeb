import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; //importando rotas
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //controle dos objetos da tela
import { HttpClientModule} from '@angular/common/http'; //comunicação com API

//adicionando todos os componentes da pagina
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { ConsultaClienteComponent } from './pages/consulta-cliente/consulta-cliente.component';
import { EdicaoClienteComponent } from './pages/edicao-cliente/edicao-cliente.component';
import { HomeComponent } from './pages/home/home.component';

//construcao de rota
const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'home'}, //definicao de pagina inicial
  {path : 'home', component: HomeComponent},
  {path : 'cadastro-cliente', component: CadastroClienteComponent},
  {path : 'consulta-cliente', component: ConsultaClienteComponent},
  {path : 'edicao-cliente/:idCliente', component: EdicaoClienteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastroClienteComponent,
    ConsultaClienteComponent,
    EdicaoClienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, //formularios reativados
    ReactiveFormsModule, //formularios reativados
    RouterModule.forRoot(routes), //registrando rotas
    HttpClientModule //registrando a biblioteca de requisições de API
  ],
  providers: [],
  bootstrap: [AppComponent] //habilitando o bootstrap
})

export class AppModule { }
