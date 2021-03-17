import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe('Instantaneas', () => {

    test('test de un snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    })
    test('Siempre fallará la instantanea', () => {
        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot()
    })
    test('Excepcion del snapshot', () => {
        const user = {
            name: 'Santiago Barrera',
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
})

