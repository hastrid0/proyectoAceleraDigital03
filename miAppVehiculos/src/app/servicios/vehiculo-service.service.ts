import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  constructor() { }

  getVehiculos(){
    return this.listaVehiculos;
  }
  agregarVehiculo(vehiculo:any){
    this.listaVehiculos.push(vehiculo);
  }

  eliminarVehiculo(codigo:string){
    let index = this.listaVehiculos.findIndex((item)=>item.codigo == codigo)
    this.listaVehiculos.splice(index,1);
  }

  actualizarVehiculo(datos:any, codigo:string){
    let vehiculo = this.listaVehiculos.find((item)=>item.codigo == codigo);
    vehiculo.marca = datos.marca ? datos.marca : vehiculo.marca;
    vehiculo.codigo = datos.codigo ? datos.codigo : vehiculo.codigo;
    vehiculo.modelo = datos.modelo ? datos.modelo : vehiculo.modelo;
    vehiculo.anio = datos.anio ? datos.anio : vehiculo.anio;
    vehiculo.calificacion = datos.calificacion ? datos.calificacion : vehiculo.calificacion;
  }

  getVehiculoFiltro(filtro:string){
    if(filtro == ""){
      return this.listaVehiculos;
    }

    return this.listaVehiculos.filter( item => 
      item.marca.toLowerCase().includes(filtro.toLowerCase()) || item.codigo.toLowerCase().includes(filtro.toLowerCase()) || item.modelo.toLowerCase().includes(filtro.toLowerCase())
    );
      
    }

  deleteVehiculo(codigo:string){
    let index = this.listaVehiculos.findIndex((item)=>item.codigo == codigo)
    this.listaVehiculos.splice(index,1);
  }

  private listaVehiculos:any[] = [
    {"codigo":"001","marca":"CHEVROLET","modelo":"SAIL 1.5","anio":"2023","foto":"https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg","calificacion":"2"},
    {"codigo":"002","marca":"MAZDA","modelo":"BT-50","anio":"2022","foto":"https://th.bing.com/th/id/OIP.UZEvElayIcpR7KgJ86RYwgHaEi?pid=ImgDet&rs=1","calificacion":"3.5"}
  ];

}
