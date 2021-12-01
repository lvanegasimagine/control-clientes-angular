import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ConfiguracionService } from '../services/configuracion.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionGuard implements CanActivate {
  
  constructor(private auth: AngularFireAuth, private router: Router, private configuracionService: ConfiguracionService) {  }
  
  canActivate(): Observable<boolean>{
    return this.configuracionService.getConfiguracion().pipe(map(configuracion =>{
        if(configuracion.permitirRegistro){
          return true;
        }
        else{
          this.router.navigateByUrl('/login');
          return false;
        }
    }));
  }
}
