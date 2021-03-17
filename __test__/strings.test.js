describe('Comproacion de strings', () => {

    const text = 'Un bonito textt'
    test('Debe ontener el siguiente text', () => {
        expect(text).toMatch(/bonito/)
    })
    test('No contiene el siguiente text', () => {
        expect(text).not.toMatch(/fabuloso/)
    })
    test('comporbar el tamaño del text', () => {
        expect(text).toHaveLength(15)
    })
})