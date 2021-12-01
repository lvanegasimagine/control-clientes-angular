import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionGuard } from './guards/configuracion.guard';


const routes: Routes = [
  { path: '', component: TableroComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistroComponent, canActivate: [ConfiguracionGuard]},
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard] },
  { path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
