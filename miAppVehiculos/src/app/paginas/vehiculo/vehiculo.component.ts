import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  wasValidated = false;
  rows:number = 5;
  pages:number;
  page:number = 1;

  formularioVehiculo:FormGroup;

  ngOnInit(){
    //this.listaVehiculo = this.vehiculoService.getVehiculos();
    this.consultarVehiculos();
    this.formularioVehiculo = this.formBuilder.group({
      "marca": [null],
      "modelo":[null],
      "codigo": [null] ,
      "anio": [null],
      "calificacion": [null],
      "foto": [null]
    });
  }
  mostrarAlerta(calificacion:any){
    alert("la calificacion es:"+calificacion)
  }
  eliminarVehiculo(vehiculo:any){
    this.vehiculoService.eliminarVehiculo(vehiculo.codigo).subscribe((respuesta)=>{
      if(respuesta.codigo == 1){
        alert(respuesta.mensaje);
        this.consultarVehiculos();
      }
    })
  }
  inicializarFormulario(){
    
    this.formularioVehiculo = this.formBuilder.group({
      "codigo":[null],
      "marca":[null],
      "modelo":[null],
      "anio":[null],
      "calificacion":[null],
      "imagen":[null]
    });
    
  }
  getListaVehiculos(){
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
    this.vehiculoService.getVehiculos(this.filtrarPor, this.rows, this.page).subscribe((respuesta)=>{
      if(respuesta.codigo == 1){
        this.listaVehiculo = respuesta.data;
        this.rows = respuesta.rows;
        this.pages = respuesta.pages;
      }
    });
  }

  seleccionarPagina(page:number){
    this.page = page;
    this.consultarVehiculos();
  }

  cambioRows(){
    this.page = 1;
    this.consultarVehiculos();
  }
 
}
