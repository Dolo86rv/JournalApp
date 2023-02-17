import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"

cloudinary.config({
    cloud_name:'daqvp0fo7',
    api_key:'295753992339795',
    api_secret: 'dbnrzPSLUAzRmNzcB5KcFksjYds',
    secure: true
})

describe('pruebas en fileUpload', () => { 
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl = 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg'
        const resp = await fetch( imageUrl )
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg') 

        const url = await fileUpload( file )
        expect(typeof url).toBe('string')

        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg', '')
        await cloudinary.api.delete_resources(['journal/' + imageId], { resource_type: 'image'})
    })

    test('debe retornar null', async() => { 
        
        const file = new File([], 'foto.jpg') 
        const url = await fileUpload( file )
        expect(url).toBe(null)
    })
})