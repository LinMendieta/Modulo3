import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];   // asigando medicos
  public mensajeError: string;

  constructor( public _medicoService: MedicosService ) { }  // inyeccion de dependencia

  ngOnInit() {   /// constructor para q se carguen los medicos
    this._medicoService.getMedicos()
          .subscribe( m => this.medicos = m );  // subscribirse para escuchar y hacer lo q se pide
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };    

    this._medicoService.agregarMedico(medico)   // llavar al servicio agregarMEdico
          .subscribe(
            medicoDB => this.medicos.push(medicoDB),    // inserta en el push
            err => this.mensajeError = err              // mensaje de error
          );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');       //alerta

    if ( confirmar ) {
      this._medicoService.borrarMedico( id );
    }

  }

}
