import type { Recipe } from './src/types/recipe';

// Mock database - students will work with this local data
export let recipesDatabase: Recipe[] = [
  {
    id: '1',
    name: 'Classic Margherita Pizza',
    isFavorite: false,
    imageURL: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600',
    skillLevel: 'Beginner',
    timeNeeded: '30 minutes',
    cuisine: 'Italian',
    ingredients: [
      { name: 'Pizza dough', quantity: '1 lb' },
      { name: 'Tomato sauce', quantity: '1 cup' },
      { name: 'Fresh mozzarella', quantity: '8 oz' },
      { name: 'Fresh basil', quantity: '10 leaves' },
      { name: 'Olive oil', quantity: '2 tbsp' }
    ],
    description: 'A classic Italian pizza with fresh mozzarella and basil',
    steps: '1. Preheat oven to 475°F\n2. Roll out pizza dough\n3. Spread tomato sauce evenly\n4. Add torn mozzarella pieces\n5. Bake for 12-15 minutes\n6. Top with fresh basil and drizzle olive oil'
  },
  {
    id: '2',
    name: 'Chicken Tikka Masala',
    isFavorite: true,
    imageURL: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
    skillLevel: 'Medium',
    timeNeeded: '45 minutes',
    cuisine: 'Indian',
    ingredients: [
      { name: 'Chicken breast', quantity: '1.5 lbs' },
      { name: 'Yogurt', quantity: '1 cup' },
      { name: 'Tikka masala paste', quantity: '3 tbsp' },
      { name: 'Heavy cream', quantity: '1 cup' },
      { name: 'Tomato sauce', quantity: '2 cups' },
      { name: 'Garlic', quantity: '4 cloves' },
      { name: 'Ginger', quantity: '1 tbsp' }
    ],
    description: 'Creamy and flavorful Indian curry with tender chicken pieces',
    steps: '1. Marinate chicken in yogurt and spices for 30 minutes\n2. Grill or bake chicken until cooked\n3. Sauté garlic and ginger\n4. Add tikka masala paste and tomato sauce\n5. Simmer for 10 minutes\n6. Add cream and cooked chicken\n7. Simmer for another 10 minutes\n8. Serve with rice or naan'
  },
  {
    id: '3',
    name: 'Beef Tacos',
    isFavorite: false,
    imageURL: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600',
    skillLevel: 'Beginner',
    timeNeeded: '25 minutes',
    cuisine: 'Mexican',
    ingredients: [
      { name: 'Ground beef', quantity: '1 lb' },
      { name: 'Taco shells', quantity: '8' },
      { name: 'Lettuce', quantity: '1 cup shredded' },
      { name: 'Tomatoes', quantity: '2 diced' },
      { name: 'Shredded cheese', quantity: '1 cup' },
      { name: 'Sour cream', quantity: '1/2 cup' },
      { name: 'Taco seasoning', quantity: '2 tbsp' }
    ],
    description: 'Quick and delicious beef tacos with fresh toppings',
    steps: '1. Brown ground beef in a skillet\n2. Add taco seasoning and water\n3. Simmer for 5 minutes\n4. Warm taco shells\n5. Fill shells with beef\n6. Top with lettuce, tomatoes, cheese, and sour cream'
  },
  {
    id: '4',
    name: 'Mushroom Risotto',
    isFavorite: true,
    imageURL: 'https://cdn.jwplayer.com/v2/media/49emAtrw/thumbnails/2yYpPiJ0.jpg?width=1280',
    skillLevel: 'Advanced',
    timeNeeded: '50 minutes',
    cuisine: 'Italian',
    ingredients: [
      { name: 'Arborio rice', quantity: '1.5 cups' },
      { name: 'Mushrooms', quantity: '8 oz sliced' },
      { name: 'Vegetable broth', quantity: '6 cups' },
      { name: 'White wine', quantity: '1/2 cup' },
      { name: 'Parmesan cheese', quantity: '1 cup grated' },
      { name: 'Onion', quantity: '1 diced' },
      { name: 'Butter', quantity: '4 tbsp' }
    ],
    description: 'Creamy and luxurious Italian rice dish with mushrooms',
    steps: '1. Heat broth and keep warm\n2. Sauté mushrooms in butter, set aside\n3. Sauté onions until soft\n4. Add rice and toast for 2 minutes\n5. Add wine and stir until absorbed\n6. Add broth one ladle at a time, stirring constantly\n7. Continue until rice is creamy and al dente (20-25 minutes)\n8. Stir in mushrooms, butter, and parmesan\n9. Season and serve immediately'
  },
  {
    id: '5',
    name: 'Pad Thai',
    isFavorite: false,
    imageURL: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600',
    skillLevel: 'Medium',
    timeNeeded: '35 minutes',
    cuisine: 'Other',
    ingredients: [
      { name: 'Rice noodles', quantity: '8 oz' },
      { name: 'Shrimp', quantity: '1 lb' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Bean sprouts', quantity: '1 cup' },
      { name: 'Peanuts', quantity: '1/4 cup crushed' },
      { name: 'Tamarind paste', quantity: '3 tbsp' },
      { name: 'Fish sauce', quantity: '2 tbsp' },
      { name: 'Lime', quantity: '1' }
    ],
    description: 'Classic Thai stir-fried noodles with shrimp and peanuts',
    steps: '1. Soak rice noodles in warm water for 20 minutes\n2. Make sauce with tamarind, fish sauce, and sugar\n3. Heat wok with oil\n4. Scramble eggs, set aside\n5. Stir-fry shrimp until pink\n6. Add drained noodles and sauce\n7. Toss until noodles are coated\n8. Add eggs and bean sprouts\n9. Serve with peanuts and lime wedges'
  }
];

// Helper functions for students to use (simulates backend)

export const getAllRecipes = (): Recipe[] => {
  return [...recipesDatabase];
};

export const addRecipe = (recipe: Recipe): void => {
  recipesDatabase.push(recipe);
};

export const updateRecipe = (id: string, updatedRecipe: Recipe): void => {
  const index = recipesDatabase.findIndex(r => r.id === id);
  if (index !== -1) {
    recipesDatabase[index] = updatedRecipe;
  }
};

export const deleteRecipe = (id: string): void => {
  recipesDatabase = recipesDatabase.filter(r => r.id !== id);
};

export const toggleRecipeFavorite = (id: string): void => {
  const recipe = recipesDatabase.find(r => r.id === id);
  if (recipe) {
    recipe.isFavorite = !recipe.isFavorite;
  }
};