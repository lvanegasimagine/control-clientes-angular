import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private flashMessagesService: FlashMessagesService, private LoginService: LoginService) { 
    this.loginForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  ngOnInit(): void {
    this.LoginService.getAuth().subscribe(auth =>{
        if(auth){
          this.router.navigateByUrl('/');
        }
    });
  }

  login(){
      this.LoginService.login(this.loginForm.value).then(res => {
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        this.flashMessagesService.show(error.message, {
          cssClass: 'alert-danger', timeout:4000 
        });
      })
  }

}
