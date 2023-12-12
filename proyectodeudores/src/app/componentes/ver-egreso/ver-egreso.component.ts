import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from '../../servicios/service-egresos/egresos.service';

@Component({
  selector: 'app-ver-egreso',
  templateUrl: './ver-egreso.component.html',
  styleUrls: ['./ver-egreso.component.css']
})
export class VerEgresoComponent implements OnInit {

  veregreso:any;
  registros: any;


  
  ngOnInit(): void {
    
  }
}
