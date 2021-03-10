import React from 'react';
import { shallow } from 'enzyme';
import  { GifGridItem } from '../components/GifGridItem';


describe('Prueba en GifGridItem ', () => {

    const title='un titulo';
    const url='https://localhost/pip.js';
    const wrapper = shallow( <GifGridItem
        title={title} 
        url={url}
        /> );
  


    test(' Debe mostrar el shallow en consola', () => {


       
       
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title);

        
    });

    test('Debe tener una imagen al igual de la url y alt de los props', () => {


        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url);
        expect(img.prop('alt')).toBe(title);

        
    })

    test('el Div debe tener animate y algo mas', () => {

        const div = wrapper.find('div');
        const clase = div.prop('className');


        expect(clase.includes('animate__backInDown')).toBe(true);

        // animate__backInDown
       


        
    })
    
    
    

   
    
    
    
})