import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// 2. To create GifExpertApp functional component.

const GifExpertApp = () => {

    // 5. To use useState hook to update the category
    let categoriesArray = ['Breaking Bad'];
    const [categories, setCategories] = useState(categoriesArray);

    // 3. To create <h2>GifExpertApp</h2> tag
    // 4. To create <ol></ol> tag

    // 6. To create categories.map( and return <GifGrid> </GifGrid> component).
    return (
        <>
        <h2> GifExpertApp </h2>
        <AddCategory setCategories =  { setCategories }/>
        <hr />
        <ol>
            {
                categories.map( categorie => {
                    return <GifGrid 
                    key={ categorie }
                    category = { categorie } />
                })
            }
        </ol>
        </>
    );

};

export default GifExpertApp;

