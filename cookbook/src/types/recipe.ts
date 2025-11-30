import type { Ingredient } from "./ingredient";


export interface Recipe{
    id: string; // unique identifier (generate hash for Firestore document ID)
    name: string;
    isFavorite: boolean //false by default
    imageURL: string;
    skillLevel: "Beginner" | "Medium" | "Advanced";
    timeNeeded: string;
    cuisine: "Italian" | "Indian" | "Mexican" | "Other" //predefine cuisine OPTIONS here
    ingredients: Ingredient[];
    description: string;
    steps: string;
}