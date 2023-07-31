import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginacionComponent } from './componentes/paginacion/paginacion.component';
import { VehiculoDetalleComponent } from './paginas/vehiculo-detalle/vehiculo-detalle.component';
import { HomeComponent } from './paginas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    CalificacionComponent,
    PaginacionComponent,
    VehiculoDetalleComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
