import { useState } from 'react';
import './App.css'

function App() {

  const [recipes, setRecipes] = useState(['Chicken Biryani', 'Tomato Salad', 'Githeri']);
  const [recipe, setRecipe] = useState("");

  function handleInputChange(e) {
    setRecipe(e.target.value);
  }

  function addNewRecipe(e) {
    e.preventDefault();

    if (recipe.trim()) {
      setRecipes([...recipes, recipe]);
      setRecipe("");
    } else {
      alert('Enter a recipe name')
    }

  }


  return (
    <>
      <h1>RECIPES</h1>
      <form onSubmit={addNewRecipe}>

        <input
          type="text" 
          value={recipe} 
          onChange={handleInputChange} 
          name="recipe-name" 
          id="recipe-name" 
          placeholder='Add a new recipe'
        />

      </form>
      <div className="recipe-list">
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
