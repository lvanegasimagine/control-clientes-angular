import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
    })
  }

  getSaldoTotal(){  
    let saldoTotal: number = 0;

    if(this.clientes){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      })
    }

    return saldoTotal;
  }

}
