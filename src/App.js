import React, { useState, useEffect } from "react";
import RecipieList from "./Components/RecipieList";
import { v4 as uuidv4 } from 'uuid';
import './CSS/app.css';
import RecipieEdit from "./Components/RecipieEdit";

export const RecipieContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipies'
function App() {

  const [selectedRecipieId, setSelectedRecipieId] = useState();
  const [recipies, setRecipies] = useState(sampleRecepies)
  const selectedRecipie = recipies.find(recipie => recipie.id === selectedRecipieId)
  
  useEffect(() =>{
    const recipieJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipieJSON !== null) { 
      setRecipies(JSON.parse(recipieJSON))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipies))
    console.log('Rendered');
  }, [recipies])

  const recipieContextValue = {
    handleRecipieAdd,
    handleRecipieDelete,
    handleRecipieSelect,
    handleRecipieChange    
  }

  function handleRecipieAdd() {
    const newRecipie = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '0',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(), name: '', amount: ''
        }
      ]
    }
    setSelectedRecipieId(newRecipie.id)
    setRecipies([...recipies, newRecipie])
  }

  function handleRecipieSelect(id) {
    setSelectedRecipieId(id)
  }

  function handleRecipieDelete(deletedRecipieId) {
    if (selectedRecipieId !== null && selectedRecipieId === deletedRecipieId) {
      setSelectedRecipieId(undefined)
    } 
    setRecipies(recipies.filter(recipie => recipie.id !== deletedRecipieId))
  }

  function handleRecipieChange(id, recipie) {
    const newRecipies = [...recipies]
    const index = newRecipies.findIndex(recipie => recipie.id === id)
    newRecipies[index] = recipie
    setRecipies(newRecipies)
  }

  return (
    <RecipieContext.Provider value={recipieContextValue}>
      <RecipieList recipies={recipies}/>
      {selectedRecipie && <RecipieEdit recipie={selectedRecipie}/>}
    </RecipieContext.Provider>
  )
}





const sampleRecepies = [
  {
    id: uuidv4(),
    name: 'Plan Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put Salt on Chicken.\n2. Put Chicken in Oven.\n3.Eat the Chicken.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken',
        ammount: '2 pounds'
      },
      {
        id: uuidv4(),
        name: 'Salt',
        ammount: '1 Tbs'
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put Paprika on pork.\n2. Put Pork in Oven.\n3.Eat the Pork.',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Pork',
        ammount: '3 pounds'
      },
      {
        id: uuidv4(),
        name: 'Paprika',
        ammount: '2 Tbs'
      },
    ]
  }
]

export default App;