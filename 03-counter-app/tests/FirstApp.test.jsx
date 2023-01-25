import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp />', ()=>{
    /*test('debe de hacer match con el snapshot',()=>{
        const { container } = render( <FirstApp /> )

        expect(container).toMatchSnapshot()
    })*/

    test('debe de mostrar el titulo en h1',()=>{
        /*const title = 'Hola'
        const { container, getByText } = render( <FirstApp title={title} /> )
    
        expect( getByText(title) ).toBeTruthy()

        const h1 = container.querySelector('h1')
        expect( h1.innerHTML ).toContain(title)*/

        const title = 'Hola'
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> )
        expect( getByText(title) ).toBeTruthy()
        expect( getByTestId('test-title')).toBeTruthy()
    })
})