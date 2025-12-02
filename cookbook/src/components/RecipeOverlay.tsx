import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, RadioGroup, FormControlLabel, Radio, DialogActions } from '@mui/material';
import type { Recipe } from '../types/recipe'; 

interface RecipeOverlayProps {
    open: boolean;
    handleClose: () => void;
    saveRecipe: (recipe: Recipe) => void;
}

const RecipeOverlay: React.FC<RecipeOverlayProps> = ({ open, handleClose, saveRecipe}) => {
    // Initial recipe state
    const [recipe, setRecipe] = useState<Recipe>({
        id: '', 
        name: '',
        isFavorite: false,
        imageURL: '',
        skillLevel: 'Beginner',
        timeNeeded: '',
        cuisine: 'Italian',
        ingredients: [{ quantity: '', name: '' }],
        description: '',
        steps: ''
    });

    {/* TASK 7 */
        /*
            Update the recipe state when fields change.
        */
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // YOUR CODE HERE
    };

    const handleIngredientChange = (index: number, name: string, value: string) => {
        const newIngredients = recipe.ingredients.map((ingredient, i) =>
            i === index ? { ...ingredient, [name]: value } : ingredient
        );
        setRecipe({ ...recipe, ingredients: newIngredients });
    };

    {/* TASK 8 */
        /*
           Add a blank ingredient to the array of ingredients in the recipe state.
        */
    }
    const addIngredient = () => {
        // YOUR CODE HERE
    };

    {/* TASK 9 */
        /*
           Append a value for the id field of the recipe state, call saveRecipe(), 
           and call handleClose()
        */
    }
    const submitRecipe = () => {
        // YOUR CODE HERE
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Recipe</DialogTitle>
            <DialogContent>
                <TextField 
                    label="Dish Name" 
                    name="name" 
                    value={recipe.name} 
                    onChange={handleInputChange} 
                    fullWidth 
                />
                
                <TextField 
                    label="Image URL" 
                    name="imageURL" 
                    value={recipe.imageURL} 
                    onChange={handleInputChange} 
                    fullWidth 
                />
                
                <RadioGroup name="skillLevel" value={recipe.skillLevel} onChange={handleInputChange} row>
                    <FormControlLabel value="Beginner" control={<Radio />} label="Beginner" />
                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
                </RadioGroup>
                
                <TextField 
                    label="Time Needed" 
                    name="timeNeeded" 
                    value={recipe.timeNeeded} 
                    onChange={handleInputChange} 
                    fullWidth 
                />
                
                <RadioGroup name="cuisine" value={recipe.cuisine} onChange={handleInputChange} row>
                    <FormControlLabel value="Italian" control={<Radio />} label="Italian" />
                    <FormControlLabel value="Indian" control={<Radio />} label="Indian" />
                    <FormControlLabel value="Mexican" control={<Radio />} label="Mexican" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
                
                {recipe.ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <TextField 
                            label="Ingredient Name" 
                            name="name" 
                            value={ingredient.name} 
                            onChange={(e) => handleIngredientChange(index, e.target.name, e.target.value)} 
                            fullWidth 
                        />
                        <TextField 
                            label="Quantity" 
                            name="quantity" 
                            value={ingredient.quantity} 
                            onChange={(e) => handleIngredientChange(index, e.target.name, e.target.value)} 
                            fullWidth 
                        />
                    </div>
                ))}
                
                <Button onClick={addIngredient}>Add Ingredient</Button>
                
                <TextField 
                    label="Description" 
                    name="description" 
                    value={recipe.description} 
                    onChange={handleInputChange} 
                    fullWidth 
                    multiline 
                    minRows={3} 
                />
                
                <TextField 
                    label="Steps" 
                    name="steps" 
                    value={recipe.steps} 
                    onChange={handleInputChange} 
                    fullWidth 
                    multiline 
                    minRows={3} 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={submitRecipe}>Save</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default RecipeOverlay;