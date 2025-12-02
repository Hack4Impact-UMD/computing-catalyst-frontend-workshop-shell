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
    
    /* TASK #1 */
        // Create a function to render skill level with colors
        // Hint: Use conditional rendering
        // - "Beginner" should be green (text-green-700)
        // - "Medium" should be yellow (text-yellow-700)
        // - "Advanced" should be red (text-red-700)
    function renderSkillLevel(skillLevel: string) {
        // YOUR CODE HERE
        return <p className="text-gray-50">{skillLevel}</p>;
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
                {/* TASK 2: */
                    /*  create a TableRow for each recipe in the prop recipes (hint: use map())
                        TableRow should have the following props:
                        key={recipe.id} hover onClick={() => onSelectRecipe(recipe)
                    */
                
                /* TASK 3: */
                    /*
                        a) Once you complete task 2, insert the following in the beginning of your row:
                            <TableCell>
                                <button 
                                    className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer font-bold" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteRecipe(recipe);
                                    }}
                                > 
                                    &#10006;
                                </button>
                            </TableCell>
                        b) After (a) add separate TableCells for recipe name, cuisine, time needed, rendered skill level, and description
                            HINT: to access individual properties on an object, add "." after the object name. For example, recipe.name 
                            gives you the recipe name.
                        c) Add the favorite button to the end of the TableRow. Write a conditional that outputs <FavoriteIcon /> if
                           recipe.favorite is true, and <FavoriteBorderIcon/> otherwise.
                            <TableCell>
                            <IconButton 
                                aria-label="favorite" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleFavorite(recipe.id!);
                                }}
                            >
                                {conditional goes here!}
                            </IconButton>
                        </TableCell>
                    */
                }
                
                {/* YOUR CODE HERE */}
                
            </TableBody>
        </Table>
        </div>
    );
}

export default RecipeTable;