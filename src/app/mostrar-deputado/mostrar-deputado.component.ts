import { Component } from '@angular/core';
import { DeputadoServiceService } from '../model/deputado-service.service';

@Component({
  selector: 'app-mostrar-deputado',
  templateUrl: './mostrar-deputado.component.html',
  styleUrl: './mostrar-deputado.component.css'
})
export class MostrarDeputadoComponent {
  
    constructor(public df: DeputadoServiceService) {}
}
