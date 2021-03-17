import { getDataFromApi } from '../promise'

describe('Probar async y await', () => {
    test('realizando una peticion API', async () => {
        const api = 'https://rickandmortyapi.com/api/character'
        const getRick = 'https://rickandmortyapi.com/api/character/1'
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        })
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez')
        })
    })

    test('Realizar peticion APi con error', async () => {
        const api = 'http://httpstat.us/404'
        const peticion = getDataFromApi(api);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'))
    })
    test('RResuelve hola', async () => {
        await expect(Promise.resolve('hola')).resolves.toBe('hola')
        await expect(Promise.reject('err')).rejects.toBe('err')
    })


})