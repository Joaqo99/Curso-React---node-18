import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', ()=>{
    test('getHeroesById debe retornar un heroes por ID', ()=>{
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    })

    test('getHeroesById debe retornar undefined si no existe el id', ()=>{
        const id = 100
        const hero = getHeroeById(id)

        //expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
        expect( hero ).toBeFalsy()
    })

    test('getHeroeByOwner debe retornar un arreglo con 3 heroes de DC', ()=>{
        const owner = 'DC'
        const heroes = getHeroesByOwner( owner )

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            {
                id: 1, 
                name: 'Batman', 
                owner: 'DC'}, 
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]) // esto se puede hacer filtrando directamente desde la base de datos
    })

    test('getHeroeByOwner debe retornar un arreglo con los heroes de Marvel', ()=>{
        const owner = 'Marvel'
        const heroes = getHeroesByOwner( owner )

        expect(heroes).toEqual([{ id: 2, name: 'Spiderman',owner: 'Marvel'}, {id: 5,name: 'Wolverine', owner: 'Marvel'},])
    })}
)