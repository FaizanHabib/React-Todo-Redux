import { ADD_FOOD, DELETE_FOOD } from "./types";

export const  addFood = (food) => ({
    type: ADD_FOOD,
    payload: food
});

export const  deleteFood = (index) => ({
    type: DELETE_FOOD,
    payload: index
});