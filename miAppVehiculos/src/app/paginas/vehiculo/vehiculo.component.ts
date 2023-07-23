import { Component, OnInit } from '@angular/core';
import { VehiculoServiceService } from 'src/app/servicios/vehiculo-service.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit{
  constructor(private vehiculoService: VehiculoServiceService) {}

  filtrarPor: string = "";
  listaVehiculo:any[] = [];
  mostrarImagen:boolean = false;
  ngOnInit(){
    this.listaVehiculo = this.vehiculoService.getVehiculos();
  }
  mostrarAlerta(calificacion:any){
    alert("la calificacion es:"+calificacion)
  }
  eliminarVehiculo(codigo:string){
    this.vehiculoService.deleteVehiculo(codigo);
  }
  
  getListaVehiculos(){
    this.listaVehiculo = this.vehiculoService.getVehiculoFiltro(this.filtrarPor);
    return this.listaVehiculo;
  }

 
}
