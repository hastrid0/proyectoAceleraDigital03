import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  constructor() { }

  getVehiculos(){
    return this.listaVehiculos;
  }
  private listaVehiculos:any[] = [];

}
