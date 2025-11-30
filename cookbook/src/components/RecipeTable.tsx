import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton
  } from "@mui/material";
import type { Recipe } from "../types/recipe";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface RecipeTableProps {
    recipes: Recipe[];
    onToggleFavorite: (id: string) => void;
    onSelectRecipe: (recipe: Recipe) => void;
    onDeleteRecipe: (recipe: Recipe) => void;
}

const RecipeTable: React.FC<RecipeTableProps> = ({ recipes, onToggleFavorite, onSelectRecipe, onDeleteRecipe }) => { 
    
    // TODO: Create a function to render skill level with colors
    // Hint: Use conditional rendering
    // - "Beginner" should be green (text-green-700)
    // - "Medium" should be yellow (text-yellow-700)
    // - "Advanced" should be red (text-red-700)
    function renderSkillLevel(skillLevel: string) {
        // YOUR CODE HERE
        return <p>{skillLevel}</p>;
    }   
    
    return (
        <div className="flex justify-center items-center w-full">
        <Table style={{ width: '89%', padding:'10px' }}>
            <TableHead>
                <TableRow className="bg-gray-200">
                    <TableCell></TableCell>
                    <TableCell align="center"><p className="text-green-700">🛡️Dish</p></TableCell>
                    <TableCell align="center"><p className="text-green-700">🍽️ Cuisine</p></TableCell>
                    <TableCell align="center"><p className="text-green-700">⏰ Time Required</p></TableCell>
                    <TableCell align="center"><p className="text-green-700">⚡Skill Level</p></TableCell>
                    <TableCell align="center"><p className="text-green-700">📝 Description</p></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* TODO: Map through recipes array and create TableRows
                    Hint: Use recipes.map() to iterate
                    Each row should display:
                    - Delete button (X symbol: &#10006;)
                    - Recipe name
                    - Recipe cuisine
                    - Time needed
                    - Skill level (use renderSkillLevel function)
                    - Description
                    - Favorite icon button
                    
                    Don't forget:
                    - key={recipe.id} on TableRow
                    - onClick={() => onSelectRecipe(recipe)} on TableRow
                    - onClick handler for delete that calls onDeleteRecipe
                    - onClick handler for favorite that calls onToggleFavorite
                */}
                
                {/* YOUR CODE HERE */}
                
            </TableBody>
        </Table>
        </div>
    );
}

export default RecipeTable;