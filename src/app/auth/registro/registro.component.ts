import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private router: Router, private fb:FormBuilder, private loginService: LoginService) { 
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigateByUrl('/');
      }
  });
  }

  registrarse(){
    this.loginService.registrarse(this.registroForm.value).then(resp => {
      this.router.navigateByUrl('/');
    }).catch(error => console.log(error))
  }

}
