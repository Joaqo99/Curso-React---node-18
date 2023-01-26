import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', ()=>{
    const category = 'Star Wars'

    test('debe de mostrar el loading inicialmente', ()=>{
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })


        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', ()=>{
        const gifs = [
            {
                id: 'ABC',
                title: 'Darth Vader',
                url: 'http://darthvader.jpg'
            },
            {
                id: '123',
                title: 'Obi Wan',
                url: 'http://obiwan.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        
        render(<GifGrid category={category}/>)
        expect( screen.getAllByRole('img').length).toBe(2)
    })
})