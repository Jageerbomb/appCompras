import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-agregarproveedores',
  templateUrl: './agregarproveedores.component.html',
  styleUrls: ['./agregarproveedores.component.css']
})
export class AgregarproveedoresComponent implements OnInit {

  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;


  constructor() {
    this.proveedor = {
      nombre: "",
      direccion: "",
      pais: "",
      email: "",
      telefono: null,
      contacto: ""
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.pais = this.formpro.value.pais;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.contacto = this.formpro.value.contacto;

    this.formpro.reset();
  }

}
