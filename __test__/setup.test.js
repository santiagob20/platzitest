//despues de cada prueba

// afterEach(()=>console.log('Ejecutado despues de cada prueba'))
// afterAll(()=>console.log('Finalizadas todas las pruebas'))
// beforeAll(()=>console.log('Antes de iniciar todas las pruebas'))
// beforeEach(()=>console.log('Antes de iniciar cada prueba'))

describe('Peparar antes de ejecutar',()=>{
    test('es verdadero',()=>{
        expect(true).toBeTruthy()
    })
})