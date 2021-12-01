import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../core/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  
  id:string;
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private flashMessagesService: FlashMessagesService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.clienteForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      saldo: ['', Validators.required],
    })
  }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clienteService.getCliente(this.id).subscribe(cliente => {
      const clienteUpdate = cliente as Cliente;
      
      this.clienteForm.patchValue({
          nombre: clienteUpdate.nombre,
          apellido: clienteUpdate.apellido,
          email: clienteUpdate.email,
          saldo: clienteUpdate.saldo,
      });
    })
  }

  actualizar(){
    if(this.clienteForm.valid){
      this.clienteForm.controls['id'].setValue(this.id);
      this.clienteService.modificarCliente(this.clienteForm.value);
      this.router.navigateByUrl('/');
    }
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
    return this.clienteForm.get('email').invalid && this.clienteForm.get('email').touched;
  }

  get saldoValido(){
    return this.clienteForm.get('saldo').valid;
  }

  get saldoNoValido(){
    return this.clienteForm.get('saldo').invalid && this.clienteForm.get('saldo').touched;
  }

  

}
