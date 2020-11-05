import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // 7. To use category prop.
    // 8. To use a custom hook called useFetchGifs and pass category prop.
    // 9. To create cards and styling it.

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>
        { loading && <p className="animate__animated animate__flash"> Loading... </p> }
        <div className="card-grid">
            {/* This create a orderened list with a map  */}
            {
                // Use destructuring and only obtain id and title
                images.map( img => {
                    return <GifGridItem  
                    key = { img.id }
                    { ...img }
                    />
                })
            }
        </div>
        </>
    )
};
