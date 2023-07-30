import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';

const routes: Routes = [
  
  {
    path: 'vehiculos',
    component:VehiculoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
