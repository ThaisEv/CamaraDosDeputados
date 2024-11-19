import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deputado } from '../model/deputado';
import { DeputadoServiceService } from '../model/deputado-service.service';

@Component({
  selector: 'app-buscar-deputado',
  templateUrl: './buscar-deputado.component.html',
  styleUrl: './buscar-deputado.component.css'
})
export class BuscarDeputadoComponent {
  formBusca: FormGroup;
  deputado: Deputado | undefined;

  constructor(private ds: DeputadoServiceService, private fb: FormBuilder) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, 
                    Validators.minLength(2)]]
    })
  }

  buscar() {
    const nome = this.formBusca.value.nome;
    this.ds.buscarDeputadoPorTitulo(nome).subscribe(
      res => {
        this.deputado = res.dados;
      }
    );
    console.log(this.deputado);
  }
}
