import React, { useContext } from 'react'
import RecipieIngredientEdit from './RecipieIngredientEdit'
import { RecipieContext } from '../App'
import { v4 as uuidv4 } from 'uuid';

function RecipieEdit({ recipie }) {
    const { handleRecipieChange, handleRecipieSelect } = useContext(RecipieContext)

    function handleChange(changes) {
        handleRecipieChange(recipie.id, {...recipie, ...changes})
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipie.ingredients]
        const index = newIngredients.findIndex(ingredient => ingredient.id === id)
        newIngredients[index] = ingredient
        handleChange({ ingredients: newIngredients })
    }
    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            ammount: ''
        }
        handleChange({ ingredients: [...recipie.ingredients, newIngredient] })
    }
    function handleIngredientDelete(id) {
        handleChange({ 
            ingredients: recipie.ingredients.filter(ingredient => ingredient.id !== id)
        })
    }

    return (
        <div className='recipie-edit'>
            <div className="recipie-edit__remove-button-container">
                <button
                    className="btn recipie-edit__remove-button"
                    onClick={() => handleRecipieSelect(undefined)}
                    >&times;</button>
            </div>
            <div className="recipie-edit__details-grid">
                <label htmlFor="name" className="recipie-edit__label">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className="recipie-edit__input"
                    value={recipie.name}
                    onInput={e => handleChange({ name: e.target.value })}
                />
  
                <label htmlFor="cookTime" className="recipie-edit__label"> 
                    Cook Time
                </label>
                <input 
                    type="text" 
                    name="cookTime" 
                    id="cookTime"
                    className="recipie-edit__input"
                    value={recipie.cookTime}
                    onInput={e => handleChange({ cookTime: e.target.value })}
                />

                <label htmlFor="servings" className="recipie-edit__label">
                    Servings
                </label>
                <input 
                    type="number" 
                    min="1" 
                    name="serving" 
                    id="serving"
                    className="recipie-edit__input"
                    value={recipie.servings}
                    onInput={e => handleChange({ servings: parseInt(e.target.value) || '' })}
                />

                <label 
                    htmlFor="instructions" className="recipie-edit__label">
                        Instructions
                    </label>
                <textarea 
                    name="instructions" 
                    className="recipie-edit__input"
                    id="instructions"
                    value={recipie.instructions}
                    onInput={e => handleChange({ instructions: e.target.value })}
                />
            </div>
            <br/>
            <label className="recipie-edit__label">Ingredients</label>
            <div className="recipie-edit__ingredient-grid">
                <div>Name</div>
                <div>Ammount</div>
                <div></div>
                {recipie.ingredients.map((ingredient) => (
                <RecipieIngredientEdit 
                    key={ingredient.id} 
                    ingredient={ingredient} 
                    handleIngredientChange={handleIngredientChange}
                    handleIngredientDelete={handleIngredientDelete}
                    />))}
            </div>
            <div className="recipie-edit__add-ingredient-btn-container">
                <button 
                    className="btn btn--primary"
                    onClick={() => handleIngredientAdd()}>
                        Add Ingredient
                </button>
            </div>
        </div>
    )
}

export default RecipieEdit
