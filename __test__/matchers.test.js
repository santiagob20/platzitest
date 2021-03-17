describe('Comparadores comunes', () => {
    const user = {
        name: "Santiago",
        lastname: "Barrera"
    }
    const user2 = {
        name: "Santiagoo",
        lastname: "Barrera"
    }
    const user3 = {
        name: "Santiago",
        lastname: "Barrera"
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user3);
    })
    test('No son exaxctamente iguales', () => {
        expect(user).not.toEqual(user2);
    })
})