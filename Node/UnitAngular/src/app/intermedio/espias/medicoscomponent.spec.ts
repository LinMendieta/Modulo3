import {MedicosComponent} from './medicos.component';
import {MedicosService} from './medicos.service';
import {from, EMPTY, throwError} from 'rxjs';

describe ('MEdicos Component testSuit', ()=>{
    let component: MedicosComponent;      // let y var crear vaiables 
    const servicio = new MedicosService(null);        // nunca se va modificar su valor

    beforeEach (()=> {
        component = new MedicosComponent(servicio);
    });
    //1

    it('Init: Debe cargar los medicos',()=> {
        const medicosFake = ['medico1','medico2','medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(()=>{   // simular que esta llamando
            return from ([medicosFake])
        })
        component.ngOnInit ();
        expect (component.medicos.length).toBeGreaterThan(0);
    })
    //2
    it ('Debe llamar al servidor para agregar un medico', ()=> {
        const espia = spyOn (servicio, 'agregarMedico').and.callFake(medico=>{
            return EMPTY;
        })
        component.agregarMedico();
        expect (espia).toHaveBeenCalled();
    });

    //3
    it('Debe agregar un nuevo medico al arreglo del componente',()=> {
        const medico = {id:1, nombre: 'Lineth' };
        spyOn (servicio, 'agregarMedico').and.returnValue (from([medico]));
        component.agregarMedico();
        expect(component.medicos.length).toBeGreaterThanOrEqual(1); /// en el arreglo medicos se busca medico
    });

    //4
    it('Si falla la llamada el error debe ser igual al error del Servicio',()=> {
        const miError = 'No se pudo agregar al medico';
        spyOn(servicio,'agregarMedico').and.returnValue(throwError(miError)) ;
        component.agregarMedico();
        expect(component.mensajeError).toBe(miError);
      })

      //5 Debe de llaamar al servidor para borrar un medico
      it('Se debe borrar el medico',()=> {
        
        spyOn(window,'confirm').and.returnValue(true) ;
        const espia = spyOn(servicio,'borrarMedico').and.returnValue(EMPTY) ;
        component.borrarMedico('medico1');
        expect(espia).toHaveBeenCalledWith('medico1');
      })
      //6 No debe llamar al servidor para borrar un medico cuando el confirmar sea negativo

      it('No debe borrar el medico',()=> {
        spyOn(window,'confirm').and.returnValue(false) ;
        const espia = spyOn(servicio,'borrarMedico').and.returnValue(EMPTY) ;     
        component.borrarMedico('medico1');
        expect(espia).not.toHaveBeenCalled();
      })
})