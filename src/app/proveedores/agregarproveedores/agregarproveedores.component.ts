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
  paises: any[] = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda",
                  "Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán",
                  "Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia",
                  "Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria",
                  "Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar",
                  "Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras",
                  "Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba",
                  "Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos",
                  "Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía",
                  "Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana",
                  "Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu",
                  "Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia",
                  "Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania",
                  "Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia",
                  "Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar",
                  "Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania",
                  "México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique",
                  "Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda",
                  "Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay",
                  "Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa",
                  "República de Macedonia","República del Congo","República Democrática del Congo",
                  "República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa",
                  "San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía",
                  "Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur",
                  "Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza",
                  "Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga",
                  "Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda",
                  "Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];

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
