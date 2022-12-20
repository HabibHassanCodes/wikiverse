import React, { useState } from 'react';
import apiURL from '../api';

export const form = () =>{



    return <form className="add-item" onSubmit={ handleSubmit } >
    <h4>Add more coffees!</h4>
    <input type="text" 
        placeholder="Coffee type" 
        value={name} 
        onChange={ (event) => {setName(event.target.value)}} />
    <button type="submit">
        Submit
    </button>
</form>

}