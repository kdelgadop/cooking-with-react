import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipieContext } from '../App'

function Recipie(props) {

    const { handleRecipieDelete, handleRecipieSelect } = useContext(RecipieContext)
    const { 
        id,
        name, 
        cookTime, 
        servings, 
        instructions,
        ingredients,
    } = props

    return (
        <div className="recipie">
            <div className="recipie__header">
                <h3 className="recipie__title">
                    {name}
                </h3>
            <div>
            <button 
                className="btn btn--primary mr-1 btn--right"
                onClick={() => handleRecipieSelect(id )}>
                    Edit
            </button>
            <button 
                className="btn btn--danger btn--right"
                onClick={() => handleRecipieDelete(id)} >
                    Delete
            </button>
                </div>
            </div>
            <div className="recipie__row">
                <span className="recipie__label">Cook Time: </span>
                <span className="recipie__value">{cookTime}</span>
            </div>
            <div>
                <span className="recipie__label">Servings: </span>
                <span className="recipie__value">{servings}</span>
            </div>
            <div>
                <span className="recipie__label">Instructions: </span>
                <div className="recipie__value recipie__instructions recipie__value--indented">
                    {instructions} 
                </div>
            </div>
            <div>
                <span className="recipie__label">Ingredients: </span>
                <div className="recipie__value recipie__value--indented">
                    <IngredientList ingredients={ingredients}/> 
                </div>
            </div>

        </div>
    )
}

export default Recipie
