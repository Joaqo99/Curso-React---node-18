import CounterApp from "../src/CounterApp"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Pruebas en el CounterApp',()=>{
    const initialValue = 10

    test('Debe de hacer match con el snapshot',()=>{
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostar el valor inicial de 100', ()=>{
        render( <CounterApp value={100}/> )
        expect( screen.getByTestId('test-counter').innerHTML).toEqual("100")
    })

    test('debe de incrementar con el boton +1', ()=>{
        render( <CounterApp value={ initialValue }/> )
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('11')).toBeTruthy()
    })

    test('debe decrementar con el boton -1', ()=>{
        render( <CounterApp value={ initialValue }/> )
        fireEvent.click( screen.getByText('-1'))
        expect( screen.getByText('9')).toBeTruthy()
    })

    test('debe de funcionar el boton de reset', ()=>{
        render( <CounterApp value={ initialValue }/> )
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('reset'))
        expect( screen.getByText('10')).toBeTruthy()
    })
})