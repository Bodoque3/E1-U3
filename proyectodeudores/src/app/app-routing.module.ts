import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import{ EgresadoComponent}from '../app/componentes/egresado/egresado.component'
const routes: Routes = [
  {
    path: 'Crear-usuario',
    component: FormularioComponent
  },
  {
    path: 'Crear-Egreso',
    component: EgresadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
