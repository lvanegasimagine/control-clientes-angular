import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from '../../services/configuracion.service';
import { Configuracion } from '../../core/configuracion.model';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  permitirRegistro:boolean = false;

  constructor(private router: Router, private configuracionService: ConfiguracionService) { }

  ngOnInit(): void {
    this.configuracionService.getConfiguracion().subscribe((resp: Configuracion) => {
        this.permitirRegistro = resp.permitirRegistro;
    });
  }

  guardar(){
      let configuracion = {permitirRegistro: this.permitirRegistro};
      this.configuracionService.modificarConfiguracion(configuracion);
      this.router.navigateByUrl('/');
  }

}
