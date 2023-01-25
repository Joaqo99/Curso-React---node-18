import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', ()=>{
    test('debe de retornar un string y un numero', ()=>{
        const [letters, numbers] = retornaArreglo()

        expect( letters ).toEqual( expect.any(String))
    })
})