import { useState } from 'react';
import { getAllRecipes, addRecipe, deleteRecipe, toggleRecipeFavorite } from '../../mockData.ts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import NavBar from '../components/Navbar';
import { Button, Checkbox } from '@mui/material';
import RecipeOverlay from '../components/RecipeOverlay';
import type { Recipe } from '../types/recipe.ts';

const RecipeBook = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(getAllRecipes());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const visibleRecipes = showFavorites ? recipes.filter(r => r.isFavorite) : recipes;
  const currentRecipe = visibleRecipes[currentIndex] || null;

  const handleDeleteRecipe = (recipe: Recipe) => {
    deleteRecipe(recipe.id);
    setRecipes(getAllRecipes());
    if (currentIndex >= visibleRecipes.length - 1) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const handleToggleFavorite = () => {
    if (!currentRecipe) return;
    
    toggleRecipeFavorite(currentRecipe.id);
    setRecipes(getAllRecipes());
  };

  const handleFavoritesToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowFavorites(e.target.checked);
    setCurrentIndex(0);
  };

  const handleSaveRecipe = (newRecipe: Recipe) => {
    addRecipe(newRecipe);
    setRecipes(getAllRecipes());
    setOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < visibleRecipes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <NavBar/>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-semibold mb-6 mt-4">Cookbook</h1>
        
        <div className="flex justify-center w-full"> 
          <div className="my-4 flex items-center justify-between w-4/5">
            <div className="flex items-center">
              <Checkbox checked={showFavorites} onChange={handleFavoritesToggle} />
              <p>Favorite</p>
            </div>
            
            <Button variant="contained" onClick={() => setOpen(true)}>New Recipe</Button>
            <RecipeOverlay 
              open={open}
              handleClose={() => setOpen(false)}
              saveRecipe={handleSaveRecipe}
            />
          </div>
        </div>

        {currentRecipe && (
          <div className="flex bg-gray-100 rounded-lg w-full max-w-5xl shadow-md overflow-hidden">
            
            <div className="w-1/2 p-6">
              <button 
                className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer font-bold" 
                onClick={() => handleDeleteRecipe(currentRecipe)}
              > 
                &#10006;
              </button>
              
              <h2 className="text-xl font-semibold mb-2">{currentRecipe.name}</h2>
              
              <div className="w-full h-56 bg-gray-300 rounded-md mb-4 flex items-center justify-center">
                <img 
                  src={currentRecipe.imageURL} 
                  alt={currentRecipe.name} 
                  className="object-cover w-full h-full rounded-md" 
                />
              </div>
              
              <p className="text-center mb-3">{currentRecipe.description}</p>
              <p><strong>Cuisine:</strong> {currentRecipe.cuisine}</p>
              <p><strong>Time Required:</strong> {currentRecipe.timeNeeded}</p>
              <p><strong>Skill Level:</strong> {currentRecipe.skillLevel}</p>
              
              <p className="mt-2 font-semibold">Ingredients:</p>
              <ul className="list-decimal ml-5 text-sm">
                {currentRecipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing.name} - {ing.quantity}</li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-500"></div>

            <div className="w-1/2 p-6 relative overflow-y-auto max-h-[500px]">
              <div className="absolute top-3 right-3">
                <IconButton onClick={handleToggleFavorite}>
                  {currentRecipe.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </div>
              
              <h2 className="text-xl font-semibold mb-2 text-center">Steps</h2>
              <p className="text-sm whitespace-pre-wrap">{currentRecipe.steps}</p>
            </div>
          </div>
        )}

        <div className="flex mt-6 space-x-4">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0} 
            className="text-white bg-blue-500 px-4 py-2 rounded-full disabled:bg-gray-300"
          >
            ⬅️
          </button>

          <button 
            onClick={handleNext} 
            disabled={currentIndex === visibleRecipes.length - 1} 
            className="text-white bg-blue-500 px-4 py-2 rounded-full disabled:bg-gray-300"
          >
            ➡️
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeBook;