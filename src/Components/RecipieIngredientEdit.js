import React from 'react'

function RecipieIngredientEdit({ ingredient, handleIngredientChange, handleIngredientDelete }) {
    function handleChange(changes) {
        handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }
    return (
        <>
            <input 
              className="recipie-edit__input" 
              type="text"
              value={ingredient.name}
              onInput={e => handleChange({ name: e.target.value })}
            />
            <input 
              className="recipie-edit__input" 
              type="text"
              value={ingredient.ammount}
              onInput={e => handleChange({ ammount: e.target.value })}
            />
            <button 
                className="btn btn--danger"
                onClick={() => handleIngredientDelete(ingredient.id)}>
                    &times;
            </button>
        </>
    )
}

export default RecipieIngredientEdit
