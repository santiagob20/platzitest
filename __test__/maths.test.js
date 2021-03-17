import {sumar,multiplicar,restar,dividir} from '../maths.js';

describe('Calculos matematicos',()=>{
    test('Prueba de sumas',()=>{
        expect(sumar(1,1)).toBe(2);
    })
    test('Prueba de multiplicar',()=>{
        expect(multiplicar(2,2)).toBe(4);
    })
    test('Prueba de restar',()=>{
        expect(restar(2,2)).toBe(0);
    })
    test('Prueba de dividir',()=>{
        expect(dividir(2,2)).toBe(1);
    })

})