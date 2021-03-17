import { arrayColors, arrayFruits } from '../arrays'

describe('Comproacion de existencia de elementos', () => {
    test('comprobar que contiene una banana', () => {
        expect(arrayFruits()).toContain('banana')
    })
    test('comprobar que no contiene una banana', () => {
        expect(arrayFruits()).not.toContain('platano')
    })

    test('comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    })
    test('comprobar que contiene una color', () => {
        expect(arrayColors()).toContain('azul')
    })
})
