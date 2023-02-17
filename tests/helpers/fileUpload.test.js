import { fileUpload } from "../../src/helpers/fileUpload"

describe('pruebas en fileUpload', () => { 
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl = 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg'
        const resp = await fetch( imageUrl )
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg') 

        const url = await fileUpload( file )
        expect(typeof url).toBe('string')
    })
})