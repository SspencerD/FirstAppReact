import { getGifs } from "../helpers/getGifs"

describe('Pruebas con GetGif fetch', () => {


    test('Debe traer 10 elementos', async() => {

       const gifi = await getGifs('Valheim');

       expect( gifi.length).toBe( 10 );

        
    })

    test(' debe traer el objeto category', async() => {

        const gifi = await getGifs('');

        expect(gifi.length).toBe(0);
        
    })
    
    
    
})
