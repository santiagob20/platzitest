import {callbackHell} from '../callback'


describe('probando un callback',()=>{
    test('callback',done=>{
        function othercall(data){
            expect(data).toBe('Hola javascripters')
            done();
        }
        callbackHell(othercall)
    })
})