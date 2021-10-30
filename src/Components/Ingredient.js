import React from 'react'

function Ingredient({ name, ammount }) {
    return (
        <>
           <span>{name}</span> 
           <span>{ammount}</span> 
        </>
    )
}

export default Ingredient
