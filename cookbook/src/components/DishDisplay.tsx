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
                {/* Close button - already complete */}
                <IconButton onClick={handleClose} className="absolute left-2 top-2">
                    <CloseIcon />
                </IconButton>

                {/* TODO: Display recipe name as h2 heading */}
                {/* YOUR CODE HERE */}

                {/* TODO: Display recipe image 
                    Hint: Use recipe.imageURL and recipe.name
                    The image should be centered and styled
                */}
                <div className="mt-4 flex justify-center">
                    <div className="w-full max-w-[600px] h-64 flex items-center justify-center">
                        {/* YOUR CODE HERE */}
                    </div>
                </div>

                {/* TODO: Display recipe description */}
                {/* YOUR CODE HERE */}

                {/* TODO: Display recipe details (cuisine, time, skill level)
                    Hint: Use <strong> tags for labels
                */}
                <div className="mt-6 space-y-2 text-sm">
                    {/* YOUR CODE HERE */}
                </div>

                {/* TODO: Display ingredients list
                    Hint: Map through recipe.ingredients array
                    Each ingredient has: name and quantity
                */}
                <div className="mt-6">
                    <p className="font-semibold">Ingredients:</p>
                    <ul className="list-decimal ml-6">
                        {/* YOUR CODE HERE */}
                    </ul>
                </div>

                {/* TODO: Display cooking steps */}
                <div className="mt-6">
                    <p className="text-xl font-semibold text-center mb-2">Steps</p>
                    {/* YOUR CODE HERE */}
                </div>
            </div>
        </Dialog>
    );
}

export default DishDisplay;