import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vehiculo } from '../interfaces/Vehiculo';
@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  constructor(private http:HttpClient) { }

  baseUrl= "https://www.epico.gob.ec/vehiculo/public/api/";

  getVehiculos(filtro?:string, rows?:number, page?:number){
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;
    return this.http.get<any>(this.baseUrl+"vehiculos/", {params:body});
  }
  eliminarVehiculo(id:string){
    return this.http.delete<any>(this.baseUrl+'vehiculo/'+id);
  }
  
  agregarVehiculo(vehiculo:Vehiculo){

    let body = this.getParamsVehiculo(vehiculo);
    return this.http.post<any>(this.baseUrl+'vehiculo/',body);

  }

  actualizarVehiculo(vehiculo:Vehiculo,codigo:string){
    let body = this.getParamsVehiculo(vehiculo);
    return this.http.put<any>(this.baseUrl+'vehiculo/' + codigo, body);
  }

  getParamsVehiculo(vehiculo:Vehiculo){
    let body = new HttpParams();
    body = vehiculo.codigo ? body.set('codigo',vehiculo.codigo) : body;
    body = vehiculo.marca ? body.set('marca',vehiculo.marca) : body;
    body = vehiculo.modelo ? body.set('modelo',vehiculo.modelo) : body;
    body = vehiculo.anio ? body.set('anio',vehiculo.anio) : body;
    body = vehiculo.calificacion ? body.set('calificacion',vehiculo.calificacion) : body;
    body = vehiculo.foto ? body.set('foto',vehiculo.foto) : body;
    return body 
  }

  getVehiculoFiltro(filtro:string){
    if(filtro == ""){
      return this.listaVehiculos;
    }

    return this.listaVehiculos.filter( item => 
      item.marca.toLowerCase().includes(filtro.toLowerCase()) || item.codigo.toLowerCase().includes(filtro.toLowerCase()) || item.modelo.toLowerCase().includes(filtro.toLowerCase())
    );
      
    }

  getVehiculo(codigo:string){
    return this.http.get<any>(this.baseUrl+"vehiculo/"+codigo);
  }
  private listaVehiculos:any[] = [
    {"codigo":"001","marca":"CHEVROLET","modelo":"SAIL 1.5","anio":"2023","foto":"https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg","calificacion":"2"},
    {"codigo":"002","marca":"MAZDA","modelo":"BT-50","anio":"2022","foto":"https://th.bing.com/th/id/OIP.UZEvElayIcpR7KgJ86RYwgHaEi?pid=ImgDet&rs=1","calificacion":"3.5"}
  ];

  
}
