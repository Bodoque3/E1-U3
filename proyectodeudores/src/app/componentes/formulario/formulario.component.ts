import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario/formulario.service';
//import { FormularioService } from '../../servicios/formulario.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario:any;
  registro:any;
  registro_enviar = {
    Nombre:String,
    Apellido:String,
    Rut:{
      type:String,
      default: null as string | null
    },
    Correo:String,
    Password:String
  }
  registros:any;
  constructor(
    private formularioSrv:FormularioService,
    private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      Nombre:['',[Validators.required]],
      Apellido:[''],
      Rut:[''],
      Correo:[''],
      Password:[''],
    });
  }

  //obtener los las validaciones
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    this.registro_enviar.Nombre = this.formularioReactivo.Nombre.value
    this.registro_enviar.Apellido = this.formularioReactivo.Apellido.value
    this.registro_enviar.Rut = this.formularioReactivo.Rut.value
    this.registro_enviar.Correo = this.formularioReactivo.Correo.value
    this.registro_enviar.Password = this.formularioReactivo.Password.value


    this.formularioSrv.crear_registro(this.registro_enviar).subscribe(
      (response:any) => {
        this.registro = response.registro;
        console.log("Los datos recibidos son")
        console.log(this.registro)
      }, error =>{
        console.log(error)
      }
    )
    //console.log(this.formularioReactivo);
  }

  obtenerRegistro(){
    this.formularioSrv.obtener_registros().subscribe(
      (response:any) => {
        this.registros = response.registros
        console.log(this.registros);

      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any){
    console.log(id)
  }
}
