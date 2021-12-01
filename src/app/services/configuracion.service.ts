import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Configuracion } from '../core/configuracion.model';

@Injectable({
  providedIn: 'root'
})

export class ConfiguracionService {

  configuracionDoc: AngularFirestoreDocument<Configuracion>;
  configuracion: Observable<Configuracion>;
  //TODO: id unico de la coleccion de configuracion
  id = 1;

  constructor(private db: AngularFirestore) { }

  getConfiguracion(): Observable<Configuracion>{
    this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
    this.configuracion = this.configuracionDoc.valueChanges();
    return this.configuracion;
  }

  modificarConfiguracion(configuracion: Configuracion){
    this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
    this.configuracionDoc.update(configuracion);
  }
}
