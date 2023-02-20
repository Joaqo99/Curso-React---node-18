import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpes/fileUpload"

cloudinary.config({
    cloud_name: 'dw1frabro',
    api_key: '693216765775495',
    api_secret: 'kaNgjwXWf7Rd8NZW7dS5qXL5KuM',
    secure: true
})

describe('Pruebas en fileUpload', ()=>{
    test('debe de subir el archivo correctamente a cloudinary', async ()=>{
        const imageUrl = 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
        const resp = await fetch(imageUrl)

        //console.log(resp)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect( typeof url ).toBe('string')

        const segments = url.split('/')
        const imageId = segments[ segments.length - 1].replace('.jpg', '')

        const cloudResponse = await cloudinary.api.delete_resources(['journal/' + imageId])
        console.log({cloudResponse})
    })
})