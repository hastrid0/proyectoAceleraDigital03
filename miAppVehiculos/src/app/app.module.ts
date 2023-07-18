import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { FormsModule } from '@angular/forms';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
