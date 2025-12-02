import { Dialog, IconButton } from '@mui/material';
import type { Recipe } from '../types/recipe'; 
import CloseIcon from '@mui/icons-material/Close';

interface DishDisplayProps {
    open: boolean;
    handleClose: () => void;
    recipe: Recipe | null;
}

const DishDisplay: React.FC<DishDisplayProps> = ({ open, handleClose, recipe }) => { 
    // Check if recipe exists, if not return null
    if (!recipe) return null;
    
    return (
        <Dialog open={open} onClose={handleClose}> 
            <div className="w-[40vw] bg-gray-100 p-6 rounded-md">
                <IconButton onClick={handleClose} className="absolute left-2 top-2">
                    <CloseIcon />
                </IconButton>

                {/* TASK 4: */
                    /*
                        a) In the code block below this, please display the recipe name in an h2 element.
                           With className="text-2xl font-semibold text-center"
                        b) In the code block within the <div>, please display the recipe image. Hint the 
                           image source (src) can be found in the recipe's imageUrl property.
                    */
                }
                {/* YOUR CODE HERE */}
                <div className="mt-4 flex justify-center">
                    <div className="w-full max-w-[600px] h-64 flex items-center justify-center">
                        {/* YOUR CODE HERE */}
                    </div>
                </div>

                {/* TASK 5: */
                    /*
                        a) In the code block below this, please display the recipe description with
                        className="mt-4 text-center"
                        b) In the code block within the <div>, please display the recipe's cuisine,
                        time needed, and skill level in separate paragraphs
                    */
                }
                {/* YOUR CODE HERE */}
                <div className="mt-6 space-y-2 text-sm">
                    {/* YOUR CODE HERE */}
                </div>

                {/* TASK 6: */
                    /*
                      In the code block below this, please display the recipe’s ingredients using .map(). 
                      For each ingredient, create an <li> that shows the ingredient’s name and quantity. 
                      Use the second argument of .map() as the key for each <li>.
                    */
                }
                <div className="mt-6">
                    <p className="font-semibold">Ingredients:</p>
                    <ul className="list-decimal ml-6">
                        {/* YOUR CODE HERE */}
                    </ul>
                </div>

                <div className="mt-6">
                    <p className="text-xl font-semibold text-center mb-2">Steps</p>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{recipe.steps}</p>
                </div>
            </div>
        </Dialog>
    );
}

export default DishDisplay;