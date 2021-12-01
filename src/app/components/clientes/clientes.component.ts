import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienteForm: FormGroup;
  clientes: Cliente[];
  @ViewChild("botonCerrar") botonClose: ElementRef;

  constructor(private clienteService: ClienteService, private fb: FormBuilder, private flashMessagesService: FlashMessagesService) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      saldo: ['', Validators.required]
    });
   }

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

  agregar(){
    if(this.clienteForm.valid){
      this.clienteService.agregarCliente(this.clienteForm.value);
      this.clienteForm.reset();
      this.cerrarModal();
    }
  }

  eliminar(id: string){
    if(confirm('Esta seguro que desea eliminar el cliente?')){
      this.clienteService.eliminarCliente(this.clienteForm.value, id);
    }
  }

  private cerrarModal(){
    this.botonClose.nativeElement.click();
  }

  get nombreValido(){
    return this.clienteForm.get('nombre').valid;
  }
  
  get nombreNoValido(){
    return this.clienteForm.get('nombre').invalid && this.clienteForm.get('nombre').touched;
  }

  get apellidoValido(){
    return this.clienteForm.get('apellido').valid;
  }

  get apellidoNoValido(){
    return this.clienteForm.get('apellido').invalid && this.clienteForm.get('apellido').touched;
  }

  get emailValido(){
    return this.clienteForm.get('email').valid;
  }

  get emailNoValido(){
    return this.clienteForm.get('email').invalid && this.clienteForm.get('email').touched
  }

  get saldoValido(){
    return this.clienteForm.get('saldo').valid;
  }

  get saldoNoValido(){
    return this.clienteForm.get('saldo').invalid && this.clienteForm.get('saldo').touched;
  }

}
