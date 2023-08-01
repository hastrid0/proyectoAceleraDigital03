import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  formularioCliente:FormGroup;
  isChecked:boolean = false;
  isRegistered:boolean = false;
  inputsActive = false;
  input1Value: string;
  input2Value: string;

  
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  registrar(){
    alert("se ha guardado su informacion")
  }

  toggleInputs(event: any) {
    this.inputsActive = event.target.checked;
    if (!event.target.checked) {
      this.input1Value = '';
      this.input2Value = '';
    }
  }

  inicializarFormulario(){
    
    this.formularioCliente = this.formBuilder.group({
      "nombre":[null],
      "password":[null],
      "email":[null],
      "telefono":[null]
    })
  }
}