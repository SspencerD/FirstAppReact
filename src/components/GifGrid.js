
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import carga from '../images/loading.gif';

export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>

            { loading && <img src={carga} alt='loading'></img>}




            <div className='card-grid'>

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}

                        />

                    ))

                }


            </div>
            <hr />
        </>
    )
}
