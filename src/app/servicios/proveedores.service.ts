import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any = [
    {
      nombre: 'Telefonica',
      direccion: 'Av. Concha y Toro 123',
      pais: 'Chile',
      email: 'telefonica@nica.cl',
      telefono: '9347582',
      contacto: 'Pedro'
    },
    {
      nombre: 'McEngorda',
      direccion: 'Los Platanos 4445',
      pais: 'Chile',
      email: 'mcengorda@grasa.cl',
      telefono: '45281396',
      contacto: 'Juan'
    },
    {
      nombre: 'Master Plop',
      direccion: 'Av. Los Toros 01286',
      pais: 'Chile',
      email: 'masterplop@caca.cl',
      telefono: '67855542',
      contacto: 'Diego'
    }
  ];

  constructor() { }

  getProveedores() {
    return this.proveedores;
  }
}
