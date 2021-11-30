import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
