import NavBar from "../components/Navbar";
import RecipeTable from "../components/RecipeTable";
import { Checkbox, Button } from "@mui/material";
import type { Recipe } from "../types/recipe";
import RecipeOverlay from "../components/RecipeOverlay";
import { useState } from "react";
import { getAllRecipes, addRecipe, deleteRecipe, toggleRecipeFavorite } from "../../mockData";
import DishDisplay from "../components/DishDisplay";

const RecipeList: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [recipes, setRecipes] = useState<Recipe[]>(getAllRecipes());
    const [showFavorites, setShowFavorites] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [viewOpen, setViewOpen] = useState(false);

    const handleSelectRecipe = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setViewOpen(true);
    };

    const handleDeleteRecipe = (recipe: Recipe) => {
        deleteRecipe(recipe.id);
        setRecipes(getAllRecipes());
    };

    const handleFavoritesToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowFavorites(e.target.checked);
    };

    const handleSaveRecipe = (newRecipe: Recipe) => {
        addRecipe(newRecipe);
        setRecipes(getAllRecipes());
        setOpen(false);
    };

    const handleToggleFavorite = (id: string) => {
        toggleRecipeFavorite(id);
        setRecipes(getAllRecipes());
    };

    return (
        <>
            <NavBar/>
            <div className="flex flex-col items-center mt-4 w-full">
                <h1 className="text-xl">Chef's Recipes:</h1>
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
            </div>
            
            <RecipeTable
                recipes={showFavorites ? recipes.filter(r => r.isFavorite) : recipes}
                onToggleFavorite={handleToggleFavorite}
                onSelectRecipe={handleSelectRecipe}
                onDeleteRecipe={handleDeleteRecipe}
            />
            
            <DishDisplay
                open={viewOpen}
                handleClose={() => setViewOpen(false)}
                recipe={selectedRecipe}
            />
        </>
    );
}

export default RecipeList;