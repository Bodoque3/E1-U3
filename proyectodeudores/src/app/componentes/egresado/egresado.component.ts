import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { egresado } 

@Component({
  selector: 'app-egresado',
  templateUrl: './egresado.component.html',
  styleUrls: ['./egresado.component.css']
})
export class EgresadoComponent implements OnInit {
  
  Egresado:any;
  registros:any;
  registro_enviar = {
    
    Dscripcion:String,
    Precio:Number,
    Id_usuario: {
      type:Schema.ObjetId,
      ref:'Usuario',
      default: null
    }
  }

}
