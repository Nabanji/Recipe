import { useState, useRef } from 'react';
import './App.css'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  function handleInputChange(e) {
    setRecipe(e.target.value);
  }

  function handleImageChange (e) {
    const file = e.target.files[0]; // Get the first file
    if (file) {
      setRecipeImage(file); // Set the file object in state
    }
  }

  function addNewRecipe(e) {
    e.preventDefault();

    if (!recipeImage) {
      alert('Please add a recipe image!');
      return;
    }

    // add the new recipe to the already existing array
    setRecipes([...recipes, {name: recipe, image: URL.createObjectURL(recipeImage)}]);

    // set the form input to an empty string after submitting the new recipe name
    setRecipe("");
    setRecipeImage(null);

    // Reset the file input value using the ref
    fileInputRef.current.value = ""; // This clears the file input

  }



  return (
    <div className='recipe-content'>
      <h1>Recipes</h1>
      <form onSubmit={addNewRecipe}>

        <input
          type="text" 
          className='recipe-input'
          value={recipe} 
          onChange={handleInputChange} 
          name="recipe-name" 
          id="recipe-name" 
          placeholder='Add a new recipe...'
          required
        />

        <h3>Choose the food image below and add it</h3>

        <input 
          type="file" 
          name="recipe-image" 
          onChange={handleImageChange}
          id="recipe-image" 
          accept='image/*'
          ref={fileInputRef} // Attach the ref to the file input 
          required
        />

        <button type='submit'>Add</button>

      </form>
      <div className="recipe-list">
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <div className="recipe-description">
                <h3>{recipe.name}</h3>
              </div>
              <img src={recipe.image} width={150} height={130} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
