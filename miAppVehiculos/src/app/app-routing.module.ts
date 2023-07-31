import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { VehiculoDetalleComponent } from './paginas/vehiculo-detalle/vehiculo-detalle.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vehiculos',
    component:VehiculoComponent
  },
  {
    path: 'vehiculos/:codigo',
    component:VehiculoDetalleComponent
  },
  {
    path: 'home',
    component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
