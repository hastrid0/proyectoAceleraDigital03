import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehiculo } from 'src/app/interfaces/Vehiculo';
import { VehiculoServiceService } from 'src/app/servicios/vehiculo-service.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit{
  constructor(private vehiculoService: VehiculoServiceService,
    private formBuilder: FormBuilder) {}

  filtrarPor: string = "";
  listaVehiculo:any[] = [];
  mostrarImagen:boolean = false;

  formularioVehiculo:FormGroup;

  ngOnInit(){
    //this.listaVehiculo = this.vehiculoService.getVehiculos();
    this.consultarVehiculos();
    this.formularioVehiculo = this.formBuilder.group({
      "codigo":[null],
      "marca":[null],
      "modelo":[null],
      "anio":[null],
      "calificacion":[null],
      "imagen":[null]
    });
  }
  mostrarAlerta(calificacion:any){
    alert("la calificacion es:"+calificacion)
  }
  eliminarVehiculo(codigo:string){
    this.vehiculoService.deleteVehiculo(codigo);
  }
  
  getListaVehiculos(){
    //this.listaVehiculo = this.vehiculoService.getVehiculoFiltro(this.filtrarPor);
    return this.listaVehiculo;
  }

  guardarVehiculo(){
    let vehiculo:Vehiculo = {...this.formularioVehiculo.value};
    
    this.vehiculoService.agregarVehiculo(vehiculo).subscribe((respuesta)=>{
      alert(respuesta.mensaje);
      if(respuesta.codigo == 1){
        this.consultarVehiculos();
      }
    },
    (errorHttp:HttpErrorResponse)=>{
      let mensaje = errorHttp.error.mensaje;
      mensaje += errorHttp.error.error?.codigo ? (' - '+ errorHttp.error.error?.codigo):"";
      mensaje += errorHttp.error.error?.marca ? (' - '+ errorHttp.error.error?.marca):"";
      mensaje += errorHttp.error.error?.modelo ? (' - '+ errorHttp.error.error?.modelo):"";
      mensaje += errorHttp.error.error?.anio ? (' - '+ errorHttp.error.error?.anio):"";
      alert(mensaje);
    }
    
    );
  }

  consultarVehiculos(){
    this.vehiculoService.getVehiculos().subscribe((respuesta)=>{
      if(respuesta.codigo == 1){
        this.listaVehiculo = respuesta.data;
      }
    });
  }
 
}
