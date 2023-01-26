import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', ()=>{
    test('debe de retornar un arreglo de gifs', async()=>{
        const gifs = await getGifs('Star Wars')
        for(let gif of gifs){
            expect(gif.id).toBeTruthy()
            expect(gif.title).toBeTruthy()
            expect(gif.url).toBeTruthy()
        }
    })
})