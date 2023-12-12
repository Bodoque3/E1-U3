import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import{ EgresadoComponent}from './componentes/egresado/egresado.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component' 
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component'



const routes: Routes = [
  {
    path: 'Crear-usuario',
    component: FormularioComponent
  },
  {
    path: 'usuario/ver-usuario',
    component: VerUsuarioComponent
  },
  {
    path: 'Crear-Egreso',
    component: EgresadoComponent
  },
  {
    path: 'egreso/ver-egreso',
    component: VerEgresoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
