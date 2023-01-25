import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp />', ()=>{
    const title = 'Hola, soy Joaquín'
    const subTitle = 'Soy un subtitulo'

    test('debe de hacer match con el snapshot',()=>{
        const { container } = render( <FirstApp title={title}/> )
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el mensaje "Hola, soy Joaquín"', () => {
        render( <FirstApp title={title}/> )
        expect( screen.getByText(title)).toBeTruthy()
    })

    test('debe de mostrar el titulo en h1',()=>{
        render( <FirstApp title={title} /> )
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title )
    })


})