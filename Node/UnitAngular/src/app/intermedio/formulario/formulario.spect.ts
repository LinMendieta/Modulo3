import {formulario} from './formulario';
import {FormBuilder} from '@angular/forms';

describe ('Pruebas de Formulario'), ()=> {
    let componente: FormularioRegister;
    beforeEach (()=> {
        componente = new FormilarioRegister (new FormBuilder());
    });
    it ('Debe crear un formalario con 2 campos, email y password', ()=>{
        expect (componente.form.contains('emaiil')).toBeTruthy();
        expect (componente.form.contains('password')).toBeTruthy();
    });

    it ('El email debeser obligatorio', ()=>{
        const control = componente.form.get('email');
        control.setValue('');
        expect (control.valid).toBeFalsy();
    });

    it ('El email debe ser un correo valido',()=>){
        const control =componente.form.get('email');
        control.setValue ('lineth@gmail.com');
        expect (control.valid).toBeTruthy();
    }
}