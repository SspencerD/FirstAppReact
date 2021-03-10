
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {


    //const categories = ['Age Of Empires','Valheim','Conan Exiles','Rust','Sea Of Thieves'];
    const [categories, setCategories] = useState(['Valheim']);

    return (

        <>
            <h2 className="animate__animated animate__backInDown animate__delay-2s">Loh' Gifi del loco PePe</h2>
            <AddCategory setCategories={setCategories} />

            <hr />



            <ol>
                {
                    categories.map(category => (

                        <GifGrid 
                        key={ category }
                        category={category} />

                    ))


                }

            </ol>



        </>



    )


}

export default GifExpertApp;


