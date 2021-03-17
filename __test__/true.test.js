import {isNull,isTrue,isFalse,isUndefined} from '../true';


describe('Probar resultados nulos',()=>{
    test('null',()=>{
        expect(isNull()).toBeNull()
    })
})

describe('Probar resultados verdaderos',()=>{
    test('truee',()=>{
        expect(isTrue()).toBeTruthy()
    })
})
describe('Probar resultados falsos',()=>{
    test('falsee',()=>{
        expect(isFalse()).toBeFalsy();
    })
})
describe('Probar resultados undefined',()=>{
    test('undefinedd',()=>{
        expect(isUndefined()).toBeUndefined();
    })
})