import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs hook', ()=>{
    test('debe de regresar el estado inicial', ()=>{
        const { result } = renderHook(()=> useFetchGifs('Star Wars'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Debe de retornar un arreglo de iamgesnes y el isLoading false', async ()=>{
        const { result } = renderHook(()=> useFetchGifs('Star Wars'))
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})