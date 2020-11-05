import React, { useState } from 'react';
import PropTypes from "prop-types";


const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    // Update text
    const handleInputChange = ( e ) => {

        setInputValue( e.target.value );
    };

    // Form submit -> preventDefault.
    const handleSubmit = ( e ) => {
        // This method don't  allow refresh the site.
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( newPet => [inputValue, ...newPet]);
            setInputValue('');
        }
        
        
    };

    return (
        <form onSubmit= { handleSubmit }>
            <input 
            type="text" 
            value = { inputValue }
            onChange = { handleInputChange }
            /> 
        </form>

    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;