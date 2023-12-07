import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from '../../servicios/service-egresos/egresos.service'; 
import { Schema } from 'mongoose';

@Component({
  selector: 'app-egresado',
  templateUrl: './egresado.component.html',
  styleUrls: ['./egresado.component.css']
}) 
export class EgresadoComponent implements OnInit {
  // Se recomienda definir tipos explícitos para las propiedades
  Egresado: any;
  registros: any;
  
  // Ajustes en la definición del objeto registro_enviar
  registro_enviar = {
    Descripcion: '', // Inicializa con un valor por defecto
    Precio: 0,      // Inicializa con un valor por defecto
    Id_usuario: {
      type: Schema.ObjectId, // Asegúrate de importar Schema desde la ubicación correcta
      ref: 'Usuario',
      default: null
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private egresosService: EgresosService
  ) { }

  ngOnInit(): void {
    // Puedes realizar lógica de inicialización aquí si es necesario
  }
}
