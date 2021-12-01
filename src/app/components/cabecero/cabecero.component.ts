import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  permitirRegistro: boolean;

  constructor(private loginService: LoginService, private router: Router, private configuracionService: ConfiguracionService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });

    this.configuracionService.getConfiguracion().subscribe(resp => {
        this.permitirRegistro = resp.permitirRegistro;
    });
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

}
