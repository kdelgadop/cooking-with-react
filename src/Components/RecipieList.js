import React, { useContext } from 'react'
import Recipie from './Recipie'
import { RecipieContext } from '../App'

function RecipieList({ recipies }) {
    const { handleRecipieAdd } = useContext(RecipieContext)
    return (
        <div className='recipe-list'>
            <div>
            {recipies.map(recipie => {
                return <Recipie 
                    key={recipie.id} {...recipie} />
            })}
            </div>
            <div className='recipe-list__add-recipe-btn-container'>
                <button 
                    className='btn add-recipie-btn' 
                    onClick={handleRecipieAdd}>
                    AddRecipie
                </button>
            </div>
        </div>
    )
}

export default RecipieList
