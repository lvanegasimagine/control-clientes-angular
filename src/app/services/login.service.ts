import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Login, Registro } from '../core/login.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AngularFireAuth) { }

  login({email, password}: Login){
    return new Promise((resolve, reject) => {
        this.authService.signInWithEmailAndPassword(email, password).then(datos => {
            resolve(datos),
            error => reject(error)
        })
    });
  }

  registrarse({email, password}: Registro){
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email,password).then(datos => {
        resolve(datos),
        error => reject(error)
      })
    })
  }

  getAuth(){
    return this.authService.authState.pipe(map( auth => auth));
  }

  logout(){
    this.authService.signOut();
  }
}
